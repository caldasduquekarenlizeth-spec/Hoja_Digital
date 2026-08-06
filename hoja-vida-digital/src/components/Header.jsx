function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>Karen Lizeth Caldas Duque</h1>
        <p>Aprendiz ADSO - SENA</p>
      </div>

      <div className="contacto">
        <p>📧 correo@ejemplo.com</p>
        <p>📱 300 000 0000</p>

        <a
          href="https://github.com/caldasduquekarenlizeth-spec"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </header>
  );
}

export default Header;