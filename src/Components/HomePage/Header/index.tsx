import { useEffect, useState } from "react";
import { HeaderDiv, BodyDiv, Title } from "./style";
import { PokemonsApiInterface } from "../../../Interfaces/PokemonsApiInterface";

export function Header() {
  let [listPokemonsAPI, setListPokemonsAPI] = useState<PokemonsApiInterface>(
    {} as PokemonsApiInterface
  );

  const axios = require("axios").default;

  const getPokemonsApi = () => {
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
    getPokemonsApi();
  }, []);

  return (
    <>
      <HeaderDiv>
        <Title>SELECT YOUR FIRST POKEMON</Title>
      </HeaderDiv>

      <BodyDiv>
        
      </BodyDiv>
    </>
  );
}

export default Header;
