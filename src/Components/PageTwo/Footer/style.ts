import styled from "styled-components";

export const Container = styled.div`
  width: 27vw;
  height: 15vh;
  background-color: #d9d9d9;
  position: absolute;
  bottom: 5vh;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 10rem;
`;

export const BoxCircle = styled.div`
  width: 10vw;
  height: 20vh;
  border-radius: 100%;
  background-color: #c1c0c0;
  margin: 0 auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
`;

export const ImgBag = styled.img`
  margin-top: auto;
  margin-bottom: auto;
  margin-left: auto;
  margin-right: auto;
  display: block;
  z-index: 1;
  cursor: pointer !important;
  `;

export const Boton = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  `;

export const ImgPokeball = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  margin-left: 1.5vw;
  cursor: pointer;
  `;

export const ImgPokedex = styled.img`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  margin-right: 1.5vw;
  cursor: pointer;
  `;
