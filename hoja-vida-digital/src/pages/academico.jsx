function Academico() {
    return (
        <main className="academico">

            <section className="academico-presentacion">
                <p className="seccion-subtitulo">MI FORMACIÓN</p>

                <h1>Formación Académica</h1>

                <p>
                    Estos son los principales estudios y procesos de formación
                    que hacen parte de mi perfil académico.
                </p>
            </section>

            <section className="academico-lista">

                <article className="academico-card">
                    <span className="academico-icono">💻</span>

                    <div>
                        <h2>Análisis y Desarrollo de Software</h2>

                        <h3>SENA</h3>

                        <p>
                            Formación orientada al desarrollo de aplicaciones
                            de software, programación, bases de datos,
                            desarrollo web y construcción de soluciones
                            tecnológicas.
                        </p>

                        <span className="academico-estado">
                            En formación
                        </span>
                    </div>
                </article>

                <article className="academico-card">
                    <span className="academico-icono">💻</span>

                    <div>
                        <h2>Tecnico en sistemas</h2>

                        <h3>SENA</h3>

                        <p>
                            Desarrollo de ejercicios y proyectos prácticos
                            relacionados con el hardware de los equipos de computo.
                        </p>

                        <span className="academico-estado">
                            Culminado 2023
                        </span>
                    </div>
                </article>

                <article className="academico-card">
                    <span className="academico-icono">🎓</span>

                    <div>
                        <h2>Bachiller academico</h2>

                        <h3>Institucion Educativa San Mateo</h3>

                        <p>
                            Bachillera academico.
                        </p>

                        <span className="academico-estado">
                            Culminado 2021
                        </span>
                    </div>
                </article>

            </section>

        </main>
    );
}

export default Academico;