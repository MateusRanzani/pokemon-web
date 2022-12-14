import styled from "styled-components";

export const HeaderDivRedLine = styled.div`
  @media only screen and (max-width: 699px) {
    display: none;
  }

  @media only screen and (min-width: 700px) {
  }

  width: 100%;
  min-height: 45vh;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BodyDivBlackLine = styled.div`
  @media only screen and (max-width: 699px) {
    display: none;
  }
  width: 100%;
  min-height: 30vh;
  max-height: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: black;
`;

export const PokemonsDiv = styled.div`
  @media only screen and (max-width: 699px) {
    display: none;
  }
  display: flex;
`;

export const Title = styled.p`
  @media only screen and (max-width: 699px) {
    display: none;
  }
  z-index: 10;
  color: white;
  text-align: center;
  font-family: Poppins;
  font-weight: 800;
  font-size: 5vw;
`;

export const Image = styled.img`
  @media only screen and (max-width: 699px) {
    display: none;
  }
  width: 30vw;
  max-width: 18rem;
  transition: width 0.15s;
  margin-top: -1.5rem;
  -webkit-filter: drop-shadow(2px 2px 2px #222);
  filter: drop-shadow(2px 2px 2px #222);

  &:hover {
    margin-top: -2.5rem;
    width: 25rem;
  }
`;

export const Img = styled.img`
  @media only screen and (max-width: 699px) {
    display: none;
  }
  width: 20rem;
`;

export const PokemonName = styled.p`
  @media only screen and (max-width: 699px) {
    display: none;
  }
  font-size: 1.8rem;
  font-family: Poppins;
  font-weight: 800;
  text-align: center;
`;

export const PokemonDetail = styled.p`
  @media only screen and (max-width: 699px) {
    display: none;
  }
  width: 20vw;
  font-size: 1.5rem;
  margin-top: -3rem;
  font-family: Poppins;
  font-weight: 600;
  text-align: center;
`;

export const ContentModal = styled.p`
  @media only screen and (max-width: 699px) {
    display: none;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70%;
`;

export const Button = styled.button`
  @media only screen and (max-width: 699px) {
    display: none;
  }
  margin: 0.5rem;
  padding: 1rem;
  width: auto;
  height: auto;
  border-radius: 1.5rem;
  color: #fff;
  border: none;
  font: 700 1rem Poppins;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;
