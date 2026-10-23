//Aqui lo que hace TicketList es que nos permite mostrar una lista de solicitudes de tickets registradas en la aplicación. Utiliza un hook personalizado para obtener el estado de los tickets y renderiza cada ticket utilizando el componente TicketItem. Si no hay tickets registrados, muestra un estado vacío utilizando el componente EmptyState. Esto proporciona a los usuarios una vista clara y organizada de todas las solicitudes de tickets, permitiéndoles consultar su prioridad y actualizar su estado según sea necesario.

import TicketItem from './TicketItem.tsx';
import EmptyState from './EmptyState.tsx';
import { useTickets } from '../hook/customHooks.tsx';

export default function TicketList() {
  const { tickets } = useTickets();

  return (
    <section className="panel list-panel" aria-labelledby="list-title">
      <div className="section-heading"><span className="step">02</span><div><h2 id="list-title">Solicitudes registradas</h2><p>Consulta su prioridad y actualiza su estado.</p></div></div>
      <div className="ticket-list">
        {tickets.length === 0
          ? <EmptyState />
          : tickets.map((ticket) => <TicketItem key={ticket.id} ticket={ticket} />)}
      </div>
    </section>
  );
}
