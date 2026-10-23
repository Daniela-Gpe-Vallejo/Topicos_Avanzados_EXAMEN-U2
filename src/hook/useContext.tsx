//Aqui lo que hace el useContext es que nos permite compartir el estado de los tickets entre diferentes componentes sin tener que pasar props manualmente a través de cada nivel del árbol de componentes. Esto nos permite acceder y actualizar el estado de los tickets desde cualquier componente que esté envuelto en el TicketProvider, lo que facilita la gestión del estado global de la aplicación.

import { useReducer, type ReactNode } from 'react';
import { TicketContext } from './customHooks.tsx';
import { ticketReducer } from './useReducer.tsx';

type TicketProviderProps = {
  children: ReactNode;
};


export function TicketProvider({ children }: TicketProviderProps) {
  const [tickets, dispatch] = useReducer(ticketReducer, []);

  return (
    <TicketContext.Provider value={{ tickets, dispatch }}>
      {children}
    </TicketContext.Provider>
  );

}
