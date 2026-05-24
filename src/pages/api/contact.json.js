import { db } from "../../lib/firebase";
import { collection, addDoc } from "firebase/firestore";

export const prerender = false;

export async function POST({ request }) {
  try {
    const data = await request.json();
    const { nombre, email, perfil, mensaje } = data;

    // Validación básica
    if (!nombre || !email || !perfil) {
      return new Response(
        JSON.stringify({ error: "Faltan campos obligatorios" }),
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
