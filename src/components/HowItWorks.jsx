const steps = [
  {
    number: '01',
    title: 'Crea tu cuenta o inicia sesión',
    text: 'Accede rápidamente para comenzar a consultar o administrar tus tandas.',
  },
  {
    number: '02',
    title: 'Únete a una tanda o crea una',
    text: 'Participa en un grupo existente o gestiona uno nuevo como administrador.',
  },
  {
    number: '03',
    title: 'Consulta pagos, turnos y participantes',
    text: 'Toda la información importante queda organizada y disponible en la app.',
  },
  {
    number: '04',
    title: 'Recibe notificaciones importantes',
    text: 'Mantente al día con recordatorios, actualizaciones y avisos relevantes.',
  },
];

function HowItWorks() {
  return (
    <section className="section" id="como-funciona">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">¿Cómo funciona?</span>
          <h2>Empieza en pocos pasos</h2>
          <p>
            Tandas Tía Yayi está pensada para que cualquier persona pueda usarla
            sin complicaciones desde su celular.
          </p>
        </div>

        <div className="steps-grid">
          {steps.map((step) => (
            <article className="step-card" key={step.number}>
              <span className="step-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
