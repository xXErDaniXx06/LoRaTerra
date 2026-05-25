import { initializeApp } from 'firebase/app';
import { getFirestore, addDoc, collection } from 'firebase/firestore';
export { renderers } from '../../renderers.mjs';

const firebaseConfig = {
  apiKey: "AIzaSyBp_e8DwPgCFFYB0bxSprhOLk5csZaqyq0",
  authDomain: "loraterra-web.firebaseapp.com",
  projectId: "loraterra-web",
  storageBucket: "loraterra-web.firebasestorage.app",
  messagingSenderId: "1082027001423",
  appId: "1:1082027001423:web:240c6906e57c33ea70cc3a"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const prerender = false;

async function POST({ request }) {
  if (request.method !== "POST") {
    return new Response(JSON.stringify({ error: "Método no permitido" }), {
      status: 405,
      headers: { "Content-Type": "application/json" }
    });
  }

  try {
    const data = await request.json();
    const nombre = data.nombre?.trim();
    const email = data.email?.trim();
    const perfil = data.perfil?.trim();
    const mensaje = data.mensaje?.trim();

    // 1. Validación de campos vacíos o cadenas de espacios
    if (!nombre || !email || !perfil) {
      return new Response(
        JSON.stringify({ error: "Todos los campos obligatorios deben completarse" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // 2. Validación estricta del formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: "Formato de email inválido" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Insertar en Firestore
    const docRef = await addDoc(collection(db, "leads"), {
      nombre,
      email,
      perfil,
      mensaje: mensaje || "",
      createdAt: new Date(),
    });

    return new Response(
      JSON.stringify({
        success: true,
        message: "¡Gracias! Hemos recibido tus datos correctamente.",
        id: docRef.id
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error al procesar el formulario:", error);
    return new Response(
      JSON.stringify({ error: "Hubo un error al guardar los datos" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
