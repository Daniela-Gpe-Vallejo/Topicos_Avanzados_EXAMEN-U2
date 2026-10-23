import { useTickets } from '../hook/customHooks.tsx';

export default function TicketSummary() {
  const { tickets } = useTickets();
  const pending = tickets.filter((ticket) => ticket.status === 'pendiente').length;
  const resolved = tickets.filter((ticket) => ticket.status === 'resuelta').length;

  return (
    <section className="summary" aria-label="Resumen de solicitudes">
      <article className="stat"><span>Total de solicitudes</span><strong>{tickets.length}</strong></article>
      <article className="stat"><span>Pendientes</span><strong className="text-amber">{pending}</strong></article>
      <article className="stat"><span>Resueltas</span><strong className="text-green">{resolved}</strong></article>
    </section>
  );
}
