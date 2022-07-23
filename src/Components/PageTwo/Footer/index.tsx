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
          <ImgBag
          style={{cursor:"pointer"}}
          src="/assets/thisbag.png"
          alt="Bag"
          width={80}
          height={80}
          onClick={() => console.log("teste")}
          />
        </BoxCircle>


        <Boton>
          <ImgPokeball
            src="/assets/Pokeboll.png"
            alt="Pokeboll"
            width={60}
            onClick={() => console.log("teste")}
          />
          <ImgPokedex
            src="/assets/Pokedex.gif"
            alt="Pokedex"
            width={80}
            onClick={() => console.log("teste")}
          />
        </Boton>
      </Container>
    </>
  );
}

export default Footer;
