function Hero() {
  return (
    <section className="hero-section">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">Control digital para tus tandas</span>
          <h1>Organiza tus tandas de forma fácil, segura y moderna</h1>
          <p>
            Tandas Tía Yayi es una aplicación diseñada para administrar tandas,
            pagos, turnos, participantes y notificaciones desde el celular,
            ayudando a usuarios y administradores a tener un mejor control.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#descargar">
              Descargar aplicación
            </a>
            <a className="button button-ghost" href="#funciones">
              Conocer más
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat-card">
              <strong>Pagos al día</strong>
              <span>Consulta movimientos y comprobantes fácilmente.</span>
            </div>
            <div className="stat-card">
              <strong>Turnos claros</strong>
              <span>Visualiza tu lugar y el avance de cada tanda.</span>
            </div>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="phone-frame">
            <div className="phone-notch" />
            <div className="phone-screen">
              <div className="app-card balance-card">
                <span className="card-label">Tanda activa</span>
                <strong>$12,500 MXN</strong>
                <small>12 participantes • Turno 5 de 12</small>
              </div>

              <div className="app-card progress-card">
                <div className="progress-header">
                  <span>Progreso de pagos</span>
                  <strong>82%</strong>
                </div>
                <div className="progress-bar">
                  <span />
                </div>
              </div>

              <div className="app-list">
                <div className="list-row">
                  <span className="row-icon">✓</span>
                  <div>
                    <strong>Pago registrado</strong>
                    <small>María López • Hoy</small>
                  </div>
                </div>
                <div className="list-row">
                  <span className="row-icon">⏰</span>
                  <div>
                    <strong>Próximo turno</strong>
                    <small>Te toca el 18 de mayo</small>
                  </div>
                </div>
                <div className="list-row">
                  <span className="row-icon">🔔</span>
                  <div>
                    <strong>Notificación enviada</strong>
                    <small>Recordatorio de pago semanal</small>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="floating-badge badge-top">Administra mejor</div>
          <div className="floating-badge badge-bottom">Todo desde tu celular</div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
