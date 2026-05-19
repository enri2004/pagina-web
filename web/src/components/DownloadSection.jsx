function DownloadSection() {
  const handleDownload = () => {
    // Abre la descarga de Google Drive en nueva pestaña
    window.open(
      "https://drive.google.com/uc?export=download&id=1zUIJfrfTumOuyhjvrqdZbldBS9PGCUS5",
      "_blank"
    );
  };

  return (
    <section className="section" id="descargar">
      <div className="container">
        <div className="download-panel">
          
          {/* INFORMACIÓN */}
          <div>
            <span className="eyebrow">Descarga oficial</span>
            <h2>Descarga Tandas Tía Yayi</h2>

            <p>
              Instala la aplicación en tu dispositivo Android y comienza a
              administrar tus tandas de manera sencilla.
            </p>

            <p className="download-note">
              El APK se descargará desde Google Drive en una nueva pestaña.
            </p>
          </div>

          {/* BOTÓN DE DESCARGA */}
          <div className="download-actions">
            <button
              className="button button-primary button-large"
              onClick={handleDownload}
            >
              Descargar APK
            </button>

            <span className="download-helper">
              Si no inicia automáticamente, revisa la nueva pestaña.
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}

export default DownloadSection;