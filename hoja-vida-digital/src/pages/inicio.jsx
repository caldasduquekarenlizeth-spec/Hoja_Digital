function Inicio() {
  return (
    <main className="inicio">

      <section className="inicio-contenido">

        <p className="inicio-saludo">
          ¡Hola! 👋
        </p>

        <h1>
          Soy <span>Karen Lizeth Caldas Duque</span>
        </h1>

        <h2>
          Aprendiz de Análisis y Desarrollo de Software
        </h2>

        <p className="inicio-descripcion">
          Bienvenido a mi Hoja de Vida Digital. En este espacio podrás
          conocer más sobre mi perfil, formación académica, experiencia,
          habilidades y proyectos relacionados con el desarrollo de software.
        </p>

        <div className="inicio-botones">
          <a href="/perfil" className="btn-inicio">
            Conocer mi perfil
          </a>

          <a href="/contacto" className="btn-inicio btn-secundario">
            Contáctame
          </a>
        </div>

      </section>

    </main>
  );
}

export default Inicio;