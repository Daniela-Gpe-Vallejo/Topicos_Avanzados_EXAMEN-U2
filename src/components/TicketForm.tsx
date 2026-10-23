//Aqui lo que hace TicketForm es que nos permite crear un formulario para registrar nuevas solicitudes de tickets. El formulario incluye campos para el nombre del solicitante, la descripción del problema y la prioridad de la solicitud. Además, utiliza un hook personalizado para manejar el estado del formulario, incluyendo la validación de los campos y el envío de los datos al servidor. Esto facilita a los usuarios registrar nuevas solicitudes de manera rápida y eficiente.

import { useTicketForm } from '../hook/useActionState.tsx';

export default function TicketForm() {
  const { state, formAction, isPending } = useTicketForm();

  return (
    <section className="panel" aria-labelledby="form-title">
      <div className="section-heading"><span className="step">01</span><div><h2 id="form-title">Nueva solicitud</h2><p>Describe brevemente lo que necesitas.</p></div></div>
      <form className="ticket-form" action={formAction} noValidate>
        <div className="field">
          <label htmlFor="requester">Solicitante</label>
          <input id="requester" name="requester" placeholder="Ej. Ana López" autoComplete="name" />
          {state.errors.requester ? <span className="field-error">{state.errors.requester}</span> : <small>Mínimo 3 caracteres.</small>}
        </div>
        <div className="field">
          <label htmlFor="description">Descripción</label>
          <textarea id="description" name="description" rows={4} placeholder="Ej. No puedo acceder al correo" />
          {state.errors.description ? <span className="field-error">{state.errors.description}</span> : <small>Mínimo 10 caracteres.</small>}
        </div>
        <div className="field">
          <label htmlFor="priority">Prioridad</label>
          <select id="priority" name="priority">
            <option value="">Selecciona una prioridad</option>
            <option value="baja">Baja</option>
            <option value="media">Media</option>
            <option value="alta">Alta</option>
          </select>
          {state.errors.priority && <span className="field-error">{state.errors.priority}</span>}
        </div>
        <div className="feedback success" aria-live="polite">{state.message}</div>
        <button className="button primary" type="submit" disabled={isPending}>
          {isPending ? 'Registrando...' : 'Registrar solicitud'}
        </button>
      </form>
    </section>
  );
}
