function DownloadSection() {
  return (
    <section className="section" id="descargar">
      <div className="container">
        <div className="download-panel">
          <div>
            <span className="eyebrow">Descarga oficial</span>
            <h2>Descarga Tandas Tía Yayi</h2>
            <p>
              Instala la aplicación en tu dispositivo Android y comienza a
              administrar tus tandas de manera sencilla.
            </p>
            <p className="download-note">
              Coloca tu archivo APK en <code>public/downloads/</code> con el
              nombre <code>tandas-tia-yayi.apk</code>.
            </p>
          </div>

          <div className="download-actions">
            {/* Coloca el archivo APK en public/downloads/tandas-tia-yayi.apk */}
            <a
              className="button button-primary button-large"
              href="https://drive.google.com/file/d/1vd682TuIOQvyr8qw5Y3pyiu5051nXkJi/view?usp=drive_link"
              download
            >
              Descargar APK
            </a>
            <span className="download-helper">
              Archivo preparado para descarga directa desde la carpeta pública.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DownloadSection;
