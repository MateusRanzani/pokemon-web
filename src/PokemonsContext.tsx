import { createContext, ReactNode, useEffect, useState } from "react";
import { ListPokemonsInterface, PokemonsApiInterface } from "./Interfaces/PokemonsApiInterface";

interface PokemonsProviderProps {
  children: ReactNode;
}

export const PokemonsContext = createContext<ListPokemonsInterface[]>([]);

export function PokemonsProvider({ children }: PokemonsProviderProps) {
  const axios = require("axios").default;

  let [listPokemonsAPI, setListPokemonsAPI] = useState<ListPokemonsInterface[]>(
    []
  );

  const getListPokemonsApi = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((res: any) => {
        setListPokemonsAPI(res.data.results);
      })
      .catch((error: any) => console.log(error));
  };

  useEffect(() => {
    getListPokemonsApi();
  }, []);

  return (
    <PokemonsContext.Provider value={listPokemonsAPI}>
      {children}
    </PokemonsContext.Provider>
  );
}
