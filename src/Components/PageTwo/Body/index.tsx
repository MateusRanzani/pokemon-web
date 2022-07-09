import { useEffect, useState } from "react";
import { PokemonsApiInterface } from "../../../Interfaces/PokemonsApiInterface";
import { PokemonDetailsInterface } from "../../../Interfaces/PokemonDetailsInterface";
import { TotalDiv } from "./style";
import Footer from "../Footer";

export function Body() {
  let [listPokemonsAPI, setListPokemonsAPI] = useState<PokemonsApiInterface>(
    {} as PokemonsApiInterface
  );

  let [pokemonDetails, setPokemonDetails] = useState<PokemonDetailsInterface[]>(
    []
  );

  const axios = require("axios").default;

  const getListPokemonsApi = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((res: any) => {
        setListPokemonsAPI(res.data);
      })
      .catch((error: any) => console.log(error));
  };


  const isEmptyObj = (obj: any) => {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        return false;
      }
    }

    return true;
  };

  useEffect(() => {
    getListPokemonsApi();
  }, []);

  return (
    <>
      <TotalDiv>
      <Footer/>
      </TotalDiv>
    </>
  );
}

export default Body;
