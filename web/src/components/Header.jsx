function Header() {
  return (
    <header className="site-header" id="inicio">
      <div className="container nav-wrapper">
        <a className="brand" href="#inicio">
          <span className="brand-mark">TY</span>
          <span>Tandas Tía Yayi</span>
        </a>

        <nav className="nav-menu" aria-label="Navegación principal">
          <a href="#inicio">Inicio</a>
          <a href="#funciones">Funciones</a>
          <a href="#beneficios">Beneficios</a>
          <a href="#descargar">Descargar</a>
        </nav>

        <a className="button button-secondary header-cta" href="#descargar">
          Descargar app
        </a>
      </div>
    </header>
  );
}

export default Header;
