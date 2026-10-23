//Aqui lo que hace TicketItem es que nos permite mostrar la información de cada ticket en la lista de solicitudes. Cada ticket se representa como un artículo que contiene su ID, prioridad, estado, descripción y solicitante. Además, proporciona botones para marcar el ticket como resuelto o eliminarlo, utilizando un hook personalizado para manejar las acciones correspondientes. Esto permite a los usuarios interactuar con los tickets de manera sencilla y eficiente.

import type { Ticket } from '../hook/useReducer.tsx';
import { useTickets } from '../hook/customHooks.tsx';

type TicketItemProps = {
  ticket: Ticket;
};

export default function TicketItem({ ticket }: TicketItemProps) {
  const { dispatch } = useTickets();

  return (
    <article className="ticket">
      <div className="ticket-top">
        <span className="ticket-id">Solicitud {ticket.id}</span>
        <div className="badges">
          <span className={`badge priority-${ticket.priority}`}>{ticket.priority}</span>
          <span className={`badge status-${ticket.status}`}>{ticket.status}</span>
        </div>
      </div>
      <h3>{ticket.description}</h3>
      <p className="requester">Solicitante: {ticket.requester}</p>
      <div className="ticket-actions">
        {ticket.status === 'pendiente' && (
          <button className="button secondary" type="button" onClick={() => dispatch({ type: 'resolve', id: ticket.id })}>
            Marcar como resuelta
          </button>
        )}
        <button className="button danger" type="button" onClick={() => dispatch({ type: 'delete', id: ticket.id })}>
          Eliminar
        </button>
      </div>
    </article>
  );
}
