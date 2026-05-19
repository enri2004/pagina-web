const features = [
  {
    icon: '📋',
    title: 'Administración de tandas',
    text: 'Organiza grupos, montos, fechas y participantes desde un solo lugar.',
  },
  {
    icon: '💳',
    title: 'Control de pagos',
    text: 'Registra pagos realizados y mantén evidencia clara de cada movimiento.',
  },
  {
    icon: '🔄',
    title: 'Turnos organizados',
    text: 'Consulta el orden de entrega y el avance de cada tanda de forma visual.',
  },
  {
    icon: '🔔',
    title: 'Notificaciones en tiempo real',
    text: 'Recibe avisos importantes sobre pagos, turnos y novedades.',
  },
  {
    icon: '🧾',
    title: 'Historial de movimientos',
    text: 'Revisa registros anteriores para tener trazabilidad y control.',
  },
  {
    icon: '🛠️',
    title: 'Panel para administrador',
    text: 'Supervisa participantes, pagos y decisiones administrativas.',
  },
  {
    icon: '👤',
    title: 'Perfil de usuario',
    text: 'Cada persona puede ver su información, sus tandas y su progreso.',
  },
  {
    icon: '🏦',
    title: 'Métodos de pago',
    text: 'Gestiona pagos por transferencia o de manera presencial.',
  },
];

function Features() {
  return (
    <section className="section section-soft" id="funciones">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Funciones clave</span>
          <h2>Todo lo que necesitas para administrar tandas con orden</h2>
          <p>
            La app centraliza la operación para que tanto administradores como
            participantes tengan información clara y actualizada.
          </p>
        </div>

        <div className="feature-grid">
          {features.map((feature) => (
            <article className="info-card" key={feature.title}>
              <span className="feature-icon" aria-hidden="true">
                {feature.icon}
              </span>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
