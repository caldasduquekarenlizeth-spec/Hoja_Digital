function Habilidades() {
    return (
        <main className="habilidades">

            <section className="habilidades-presentacion">
                <p className="seccion-subtitulo">MIS HABILIDADES</p>

                <h1>Habilidades</h1>

                <p>
                    Estas son algunas de las habilidades y conocimientos
                    que he desarrollado durante mi formación.
                </p>
            </section>


            <section className="habilidades-lista">

                <article className="habilidad-card">
                    <span className="habilidad-icono">💻</span>

                    <div>
                        <h2>Programación</h2>

                        <p>
                            Conocimientos en lógica de programación y
                            desarrollo de aplicaciones.
                        </p>
                    </div>
                </article>


                <article className="habilidad-card">
                    <span className="habilidad-icono">🌐</span>

                    <div>
                        <h2>Desarrollo web</h2>

                        <p>
                            Desarrollo de páginas y aplicaciones web
                            utilizando tecnologías frontend y backend.
                        </p>
                    </div>
                </article>


                <article className="habilidad-card">
                    <span className="habilidad-icono">🗄️</span>

                    <div>
                        <h2>Bases de datos</h2>

                        <p>
                            Conocimientos en creación, gestión y conexión
                            de bases de datos con aplicaciones.
                        </p>
                    </div>
                </article>


                <article className="habilidad-card">
                    <span className="habilidad-icono">🔧</span>

                    <div>
                        <h2>Herramientas de desarrollo</h2>

                        <p>
                            Manejo de herramientas como Visual Studio Code,
                            Git y GitHub para el desarrollo de proyectos.
                        </p>
                    </div>
                </article>


                <article className="habilidad-card">
                    <span className="habilidad-icono">🤝</span>

                    <div>
                        <h2>Trabajo en equipo</h2>

                        <p>
                            Capacidad para colaborar y participar en el
                            desarrollo de proyectos académicos.
                        </p>
                    </div>
                </article>


                <article className="habilidad-card">
                    <span className="habilidad-icono">📚</span>

                    <div>
                        <h2>Aprendizaje continuo</h2>

                        <p>
                            Interés por aprender nuevas tecnologías y
                            fortalecer continuamente mis conocimientos.
                        </p>
                    </div>
                </article>

            </section>

        </main>
    );
}

export default Habilidades;