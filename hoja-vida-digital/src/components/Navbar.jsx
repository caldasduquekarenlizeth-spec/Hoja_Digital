import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Inicio</Link>
      <Link to="/perfil">Perfil</Link>
      <Link to="/academico">Académico</Link>
      <Link to="/experiencia">Experiencia</Link>
      <Link to="/habilidades">Habilidades</Link>
      <Link to="/contacto">Contacto</Link>
    </nav>
  );
}

export default Navbar;