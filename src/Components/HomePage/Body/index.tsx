import { useEffect, useState } from "react";
import { PokemonDetailsInterface } from "../../../Interfaces/PokemonDetailsInterface";
import { Title, PokemonsDiv, Image } from "./styles";

export function Header() {
  let [pokemonDetails, setPokemonDetails] = useState<PokemonDetailsInterface[]>(
    []
  );

  const axios = require("axios").default;

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
    getPokemonDetails();
  }, []);

  return (
    <>
        <div>
        <Title>SELECT YOUR FIRST POKEMON</Title>

        <PokemonsDiv>
            {!isEmptyObj(pokemonDetails)
            ? pokemonDetails.map((pokemon) => (
                <div>
                    <Image src={pokemon.sprites.front_default} alt="pokemon" />
                </div>
                ))
            : ""}
        </PokemonsDiv>
        </div>

   
    </>
  );
}

export default Header;
