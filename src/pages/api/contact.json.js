import { db } from "../../lib/firebase";
import { collection, addDoc } from "firebase/firestore";

export const prerender = false;

export async function POST({ request }) {
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
