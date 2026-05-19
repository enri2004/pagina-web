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
              href="https://github.com/enri2004/Tandas_Tia_Yayi/releases/download/v1.0/Tandas.Tia.Yayi.apk"
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
