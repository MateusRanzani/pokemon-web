import { useContext,} from "react";
import { TotalDiv } from "./style";
import Footer from "../Footer";
import { PokemonsContext } from "../../../PokemonsContext";
import { PokemonsApiInterface } from "../../../Interfaces/PokemonsApiInterface";

export function Body() {
  const allPokemonsApi = useContext(PokemonsContext);
  const isEmptyObj = (obj: any) => {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        return false;
      }
    }

    return true;
  };

  return (
    <>
      <TotalDiv>
        <Footer />
      </TotalDiv>
    </>
  );
}

export default Body;
