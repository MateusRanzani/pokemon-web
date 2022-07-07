import { useEffect, useState } from "react";
import { PokemonsApiInterface } from "../../../Interfaces/PokemonsApiInterface";
import { PokemonDetailsInterface } from "../../../Interfaces/PokemonDetailsInterface";
import { TotalDiv } from "./style";
import Body from "../Body";

export function PageTwo() {

  return (
    <>
      <TotalDiv >
        <Body/>
      </TotalDiv>
    </>
  );
}

export default PageTwo;
