import {
  Boton,
  BoxCircle,
  Container,
  ImgBag,
  ImgPokeball,
  ImgPokedex,
} from "./style";

export function Footer() {
  return (
    <>
      <Container>
        <BoxCircle>
          <a href="">
            <ImgBag src="/assets/thisbag.png" alt="Bag" width={100} />
          </a>
        </BoxCircle>

        <Boton>
          <a href="">
            <ImgPokeball src="/assets/Pokeboll.png" alt="Pokeboll" width={60} />
          </a>
          <a href="">
            <ImgPokedex src="/assets/Pokedex.gif" alt="Pokeboll" width={80} />
          </a>
        </Boton>
      </Container>
    </>
  );
}

export default Footer;
