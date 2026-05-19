const benefits = [
  'Ahorro organizado para cada tanda.',
  'Mayor control para los administradores.',
  'Información clara para los participantes.',
  'Diseño fácil de usar y entender.',
  'Acceso desde dispositivos móviles.',
  'Seguridad mediante inicio de sesión.',
];

function Benefits() {
  return (
    <section className="section section-accent" id="beneficios">
      <div className="container benefits-layout">
        <div className="benefits-copy">
          <span className="eyebrow">Beneficios reales</span>
          <h2>Una experiencia clara para administradores y usuarios</h2>
          <p>
            La plataforma mejora la organización, reduce errores manuales y
            facilita el seguimiento constante de cada tanda.
          </p>

          <div className="audience-panels">
            <article className="audience-card">
              <h3>Para administradores</h3>
              <p>
                Crea tandas, revisa comprobantes, acepta o rechaza pagos, consulta
                reportes y administra participantes de forma más eficiente.
              </p>
            </article>

            <article className="audience-card">
              <h3>Para usuarios</h3>
              <p>
                Visualiza tus tandas, revisa tu turno, registra pagos, recibe
                avisos y consulta el historial cuando lo necesites.
              </p>
            </article>
          </div>
        </div>

        <div className="benefits-list">
          {benefits.map((benefit) => (
            <div className="benefit-item" key={benefit}>
              <span aria-hidden="true">✔</span>
              <p>{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
