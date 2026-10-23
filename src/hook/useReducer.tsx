//Aqui lo que hace el useReducer es que nos permite manejar el estado de los tickets de manera más eficiente y organizada. En lugar de tener múltiples estados separados para cada ticket, podemos tener un solo estado que contenga todos los tickets y sus propiedades. Esto nos permite realizar acciones como agregar, resolver o eliminar tickets de manera más sencilla y clara.

export type Priority = 'baja' | 'media' | 'alta';
export type TicketStatus = 'pendiente' | 'resuelta';

export type Ticket = {
  id: string;
  requester: string;
  description: string;
  priority: Priority;
  status: TicketStatus;
};

export type TicketAction =
  | { type: 'add'; ticket: Ticket }
  | { type: 'resolve'; id: Ticket['id'] }
  | { type: 'delete'; id: Ticket['id'] };

export function ticketReducer(tickets: Ticket[], action: TicketAction): Ticket[] {
  if (action.type === 'add') {
    return [...tickets, action.ticket];
  }

  if (action.type === 'resolve') {
    return tickets.map((ticket) =>
      ticket.id === action.id
        ? { ...ticket, status: 'resuelta' }
        : ticket,
    );
  }

  if (action.type === 'delete') {
    return tickets.filter((ticket) => ticket.id !== action.id);
  }

  return tickets;
}
