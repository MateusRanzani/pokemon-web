
import { Boton, BoxCircle, Container, ImgBag, ImgPokeball, ImgPokedex } from "./style";

export function Footer() {
  return (
    <>
      <Container>
        
        <BoxCircle>
            <ImgBag src="/assets/thisbag.png" alt="Bag" width={100} />
        </BoxCircle>

        <Boton>
          <ImgPokeball src="/assets/Pokeboll.png" alt="Pokeboll" width={60} />
          <ImgPokedex src="/assets/Pokedex.gif" alt="Pokeboll" width={80} />
        </Boton>
        
      </Container>
    </>
  );
}

export default Footer;
