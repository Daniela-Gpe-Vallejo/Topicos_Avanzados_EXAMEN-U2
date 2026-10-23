import { useActionState } from 'react';
import { useTickets } from './customHooks.tsx';
import type { Priority } from './useReducer.tsx';

type FormErrors = {
  requester?: string;
  description?: string;
  priority?: string;
};

type FormState = {
  errors: FormErrors;
  message: string;
};

const initialState: FormState = {
  errors: {},
  message: '',
};

export function useTicketForm() {
  const { dispatch } = useTickets();

  async function registerTicket(
    _previousState: FormState,
    formData: FormData,
  ): Promise<FormState> {
    const requester = String(formData.get('requester') ?? '').trim();
    const description = String(formData.get('description') ?? '').trim();
    const priorityValue = String(formData.get('priority') ?? '');
    const errors: FormErrors = {};

    if (requester.length < 3) {
      errors.requester = 'El solicitante debe tener mínimo 3 caracteres.';
    }

    if (description.length < 10) {
      errors.description = 'La descripción debe tener mínimo 10 caracteres.';
    }

    if (!['baja', 'media', 'alta'].includes(priorityValue)) {
      errors.priority = 'Selecciona una prioridad válida.';
    }


    //aqui lo que hace es que si hay errores en el formulario, devuelve un objeto con los errores y un mensaje vacío. Si no hay errores, simula un retraso de 1 segundo (para imitar una llamada a un servidor) y luego despacha una acción para agregar el nuevo ticket al estado global. Finalmente, devuelve un objeto con los errores vacíos y un mensaje de éxito.
    if (Object.keys(errors).length > 0) {
      return { errors, message: '' };
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));

    dispatch({
      type: 'add',
      ticket: {
        id: Date.now().toString(),
        requester,
        description,
        priority: priorityValue as Priority,
        status: 'pendiente',
      },
    });

    return {
      errors: {},
      message: 'Solicitud registrada correctamente.',
    };
  }

  const [state, formAction, isPending] = useActionState(registerTicket, initialState);

  return { state, formAction, isPending };
}
