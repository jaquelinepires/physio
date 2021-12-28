import { createContext, ReactNode, useContext, useEffect, useState} from 'react';
import { api } from '../services/api';

interface Anotation {
  id: number;
  name: string;
  report: string;
  type: string;
  createAt: string;
}

type AnotationInput = Omit<Anotation, 'id' | 'createAt'>

interface AnotationsProviderProps {
  children: ReactNode;
}

interface AnotationsContextData {
  anotations: Anotation[];
  createAnotation: (anotation: AnotationInput) => Promise<void>;


}

const AnotationsContext = createContext<AnotationsContextData>(
  {} as AnotationsContextData
  );

export function AnotationsProvider({children}: AnotationsProviderProps) {
  const [anotations, setAnotations] = useState<Anotation[]>([]);

    useEffect(() => {
      api.get('anotations')
      .then(response => setAnotations(response.data.anotations))
    }, []);

    async function createAnotation(anotationInput: AnotationInput) {
      const response = await api.post('/anotations', {
      ...anotationInput,
      createAt: new Date(),
    })
      const { anotation } = response.data;

      setAnotations([
        ...anotations,
        anotation,
      ])
     }

    return (
      <AnotationsContext.Provider value={{anotations, createAnotation}}>
          {children}
      </AnotationsContext.Provider>
    )
}

export function useAnotations() {
  const context = useContext(AnotationsContext)

  return context
}