const API_URL = "http://localhost:3000/api/contacto";

export const enviarContacto = async (datos) => {
    try {
        const respuesta = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(datos)
        });

        const resultado = await respuesta.json();

        if (!respuesta.ok) {
            throw new Error(resultado.mensaje || "Error al enviar el contacto");
        }

        return resultado;

    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
};