const ContactoModel = require("../models/contactoModel");

const ContactoController = {

    crearContacto: (req, res) => {

        const datos = req.body;

        ContactoModel.crear(datos, (error, resultado) => {

            if (error) {
                return res.status(500).json({
                    mensaje: "Error al guardar el contacto",
                    error: error.message
                });
            }

            res.status(201).json({
                mensaje: "Contacto guardado correctamente",
                id: resultado.insertId
            });

        });

    }

};

module.exports = ContactoController;