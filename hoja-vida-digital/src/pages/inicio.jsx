import fotoKaren from "../assets/foto-karen.png";

function Inicio() {
    return (
        <main className="inicio">

            <section className="inicio-contenido">

                <div className="inicio-foto">
                    <img
                        src={fotoKaren}
                        alt="Foto de Karen Lizeth Caldas Duque"
                    />
                </div>

                <div className="inicio-texto">

                    <p className="inicio-saludo">
                        Hola, soy
                    </p>

                    <h1>
                        Karen Lizeth Caldas Duque
                    </h1>

                    <h2>
                        Aprendiz de Análisis y Desarrollo de Software
                    </h2>

                    <p className="inicio-descripcion">
                        Soy aprendiz del programa Análisis y Desarrollo
                        de Software del SENA, interesada en el desarrollo
                        de aplicaciones, programación, bases de datos y
                        tecnologías web.
                    </p>

                    <div className="inicio-botones">

                        <a
                            href="/perfil"
                            className="btn-inicio"
                        >
                            Conóceme
                        </a>

                        <a
                            href="/contacto"
                            className="btn-inicio btn-secundario"
                        >
                            Contáctame
                        </a>

                    </div>

                </div>

            </section>

        </main>
    );
}

export default Inicio;