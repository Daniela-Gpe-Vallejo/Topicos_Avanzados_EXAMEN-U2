import { createContext, useContext, type Dispatch } from 'react';
import type { Ticket, TicketAction } from './useReducer.tsx';

type TicketContextValue = {
  tickets: Ticket[];
  dispatch: Dispatch<TicketAction>;
};

export const TicketContext = createContext<TicketContextValue | null>(null);

export function useTickets() {
  const context = useContext(TicketContext);

  if (!context) {
    throw new Error('useTickets debe usarse dentro de TicketProvider');
  }

  return context;
}
