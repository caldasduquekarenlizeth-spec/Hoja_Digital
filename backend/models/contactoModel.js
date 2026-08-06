const db = require("../database/database");

const ContactoModel = {

    crear: (datos, callback) => {

        const sql = `
            INSERT INTO contactos
            (nombre, correo, telefono, asunto, mensaje)
            VALUES (?, ?, ?, ?, ?)
        `;

        db.query(
            sql,
            [
                datos.nombre,
                datos.correo,
                datos.telefono,
                datos.asunto,
                datos.mensaje
            ],
            callback
        );
    }

};

module.exports = ContactoModel;