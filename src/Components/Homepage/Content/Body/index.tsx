import { useEffect, useState } from "react";
import { PokemonDetailsInterface } from "../../../../Interfaces/PokemonDetailsInterface";
import { IoClose } from "react-icons/io5";
import {
  Title,
  PokemonsDiv,
  Image,
  Img,
  PokemonName,
  PokemonDetail,
  ContentModal,
  Button,
} from "./styles";
import Modal from "react-modal";
import { Link } from "react-router-dom";

export function Header() {
  let [pokemonDetails, setPokemonDetails] = useState<PokemonDetailsInterface[]>(
    []
  );

  let [selectedpokemon, setSelectedPokemon] = useState<PokemonDetailsInterface>(
    {} as PokemonDetailsInterface
  );

  let [openModalSelectedPokemon, setOpenModalSelectedPokemon] = useState(false);

  const axios = require("axios").default;

  const getPokemonDetails = async () => {
    let pokemonsHomePage: PokemonDetailsInterface[] = [];

    await axios
      .get("https://pokeapi.co/api/v2/pokemon/1/")
      .then((res: any) => {
        pokemonsHomePage.push(res.data);
      })
      .catch((error: any) => console.log(error));

    await axios
      .get("https://pokeapi.co/api/v2/pokemon/4/")
      .then((res: any) => {
        pokemonsHomePage.push(res.data);
      })
      .catch((error: any) => console.log(error));

    await axios
      .get("https://pokeapi.co/api/v2/pokemon/7/")
      .then((res: any) => {
        pokemonsHomePage.push(res.data);
      })
      .catch((error: any) => console.log(error));

    pokemonDetails = pokemonsHomePage;
    setPokemonDetails(pokemonDetails);
  };

  const isEmptyObj = (obj: any) => {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        return false;
      }
    }

    return true;
  };

  const requestCloseModalSelectedPokemon = () => {
    setOpenModalSelectedPokemon(false);
  };

  useEffect(() => {
    getPokemonDetails();
  }, []);

  useEffect(() => {
    // console.log(selectedpokemon)
  }, [selectedpokemon]);

  return (
    <>
      
      <div style={{ }}>

        <Title>SELECT YOUR FIRST POKEMON</Title>

        <PokemonsDiv>
          {!isEmptyObj(pokemonDetails)
            ? pokemonDetails.map((pokemon) => (
                <div>
                  <a
                    onClick={() => {
                      setSelectedPokemon(pokemon);
                      setOpenModalSelectedPokemon(true);
                    }}
                  >
                    <Image src={pokemon.sprites.front_default} alt="pokemon" />
                  </a>
                </div>
              ))
            : ""}
        </PokemonsDiv>

        
        {!isEmptyObj(selectedpokemon) ? (
          <Modal
            isOpen={openModalSelectedPokemon}
            onRequestClose={requestCloseModalSelectedPokemon}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
          >
            <a onClick={() => requestCloseModalSelectedPokemon()}>
              <IoClose className="react-modal-close" />
            </a>
            <PokemonName>{selectedpokemon.name.toUpperCase()}</PokemonName>
            <ContentModal>
              <Img
                src={
                  !isEmptyObj(selectedpokemon)
                    ? selectedpokemon.sprites.front_default
                    : ""
                }
                alt={selectedpokemon.name}
              />

              <PokemonDetail>
                <br />
                <p>HEIGHT: {selectedpokemon.height}</p>
                <p>WEIGHT: {selectedpokemon.weight}</p>
                <p>
                  TYPE:{" "}
                  {selectedpokemon.types.map((tipo) => (
                    <>{tipo.type.name.toUpperCase()}</>
                  ))}
                </p>
              </PokemonDetail>
            </ContentModal>
            <div style={{ justifyContent: "center", display: "flex" }}>
              <Button
                style={{ backgroundColor: "#EF4444" }}
                onClick={requestCloseModalSelectedPokemon}
              >
                CHOOSE OTHER
              </Button>
              <Link to="/pagetwo">
                <Button style={{ backgroundColor: "#22C55E" }}>CHOOSE</Button>
              </Link>
            </div>
          </Modal>
        ) : (
          ""
        )}
      </div>
      

    </>
  );
}

export default Header;
