import { useEffect, useState } from "react";
import { PokemonsApiInterface } from "../../../../Interfaces/PokemonsApiInterface";
import { PokemonDetailsInterface } from "../../../../Interfaces/PokemonDetailsInterface";
import Body from "../Body";

export function Page() {
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

  const getPokemonDetails = () => {
    let pokemonsHomePage: PokemonDetailsInterface[] = [];

    axios
      .get("https://pokeapi.co/api/v2/pokemon/1/")
      .then((res: any) => {
        pokemonsHomePage.push(res.data);
      })
      .catch((error: any) => console.log(error));

    axios
      .get("https://pokeapi.co/api/v2/pokemon/4/")
      .then((res: any) => {
        pokemonsHomePage.push(res.data);
      })
      .catch((error: any) => console.log(error));

    axios
      .get("https://pokeapi.co/api/v2/pokemon/7/")
      .then((res: any) => {
        pokemonsHomePage.push(res.data);
      })
      .catch((error: any) => console.log(error));

    setPokemonDetails(pokemonsHomePage);
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
    getPokemonDetails();
  }, []);

  return (
    <>
      <Body />
    </>
  );
}

export default Page;
