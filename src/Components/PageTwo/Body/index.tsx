import { useContext, useEffect, useState } from "react";
import { TotalDiv } from "./style";
import Footer from "../Footer";
import { PokemonsContext } from "../../../PokemonsContext";
import {
  ListPokemonsInterface,
  PokemonsApiInterface,
} from "../../../Interfaces/PokemonsApiInterface";
import axios from "axios";
import { PokemonDetailsInterface } from "../../../Interfaces/PokemonDetailsInterface";
import { textSpanEnd } from "typescript";

export function Body() {
  const allPokemonsApi: ListPokemonsInterface[] = useContext(PokemonsContext);

  let [pokemons, setPokemons] = useState<PokemonDetailsInterface[]>([]);

  const isEmptyObj = (obj: any) => {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        return false;
      }
    }

    return true;
  };

  // PokemonDetailsInterface

  let teste : {} = {}

  const getListPokemonsApi = async (link: string) => {
    await axios
      .get(link)
      .then((res: any) => {
        setPokemons([...pokemons, res.data]);
      })
      .catch((error: any) => console.log(error));

      if (pokemons.length >= 20) {
        teste= pokemons
      }
  };

  useEffect(() => {
    allPokemonsApi.map((pokemon) => {
      getListPokemonsApi(pokemon.url);
    });
  }, []);

  useEffect(() => {}, [pokemons]);

  return (
    <>
      <TotalDiv>
        <div>
          {!isEmptyObj(teste)? <div>sim</div> : <div>nao</div>}
        </div>
        <Footer />
      </TotalDiv>
    </>
  );
}

export default Body;
