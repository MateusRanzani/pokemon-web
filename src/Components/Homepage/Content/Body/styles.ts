import styled from "styled-components";

export const HeaderDivRedLine = styled.div `
    width: 100%;
    height: 45vh;
    max-height: 30rem;
    background-color: red;
`;

export const BodyDivBlackLine = styled.div `
position:relative;
    width: 100%;
    height: 30vh;
    max-height: 15rem;
    background-color: black;
`;


export const PokemonsDiv = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  top: -1.5rem;
  left: 0;
  right: 0;
`;


export const Title = styled.p`
  position: absolute;
  left: 0;
  right: 0;
  top: 1%;
  padding: 4rem;
  color: white;
  text-align: center;
  font-family: Poppins;
  font-weight: 800;
  font-size: 4rem;
`;

export const Image = styled.img`
  width: 20rem;
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
  width: 20rem;
`;

export const PokemonName = styled.p`
  font-size: 1.8rem;
  font-family: Poppins;
  font-weight: 800;
  text-align: center;
`;

export const PokemonDetail = styled.p`
  width: 20vw;
  font-size: 1.5rem;
  margin-top: -3rem;
  font-family: Poppins;
  font-weight: 600;
  text-align: center;
`;

export const ContentModal = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70%;
`;

export const Button = styled.button`
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

