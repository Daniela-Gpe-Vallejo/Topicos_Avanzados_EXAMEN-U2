//Aqui lo que hace el Header es que nos permite mostrar un encabezado en la página de la aplicación, que contiene información sobre la sección de operaciones y soporte, así como un título y una descripción de la funcionalidad de la aplicación. Esto ayuda a los usuarios a entender rápidamente el propósito de la página y cómo pueden interactuar con ella.

export default function Header() {
  return (
    <header className="page-header">
      <div><p className="eyebrow">OPERACIONES / SOPORTE</p><h1>AYUDAME CON LOS TICKETS</h1><p>Registra y da seguimiento a los tickets :D .</p></div>
    </header>
  );
}
