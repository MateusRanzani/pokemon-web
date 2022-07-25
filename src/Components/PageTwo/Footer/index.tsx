import { useState } from "react";
import Modal from "react-modal";

import {
  Boton,
  BoxCircle,
  Container,
  ImgBag,
  ImgPokeball,
  ImgPokedex,
} from "./style";

export function Footer() {
  let [bagModalOpen, setBagModalOpen] = useState(false);
  let [pokeballModalOpen, setPokeballModalOpen] = useState(false);
  let [pokedexModalOpen, setPokedexModalOpen] = useState(false);

  const requestCloseModalOptionsFooter = () => {
    setBagModalOpen(false)
    setPokeballModalOpen(false)
    setPokedexModalOpen(false)
  }
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
          onClick={() => setBagModalOpen(true)}
          />
        </BoxCircle>


        <Boton>
          <ImgPokeball
            src="/assets/Pokeboll.png"
            alt="Pokeboll"
            width={60}
            onClick={() => setPokeballModalOpen(true)}
          />
          <ImgPokedex
            src="/assets/Pokedex.gif"
            alt="Pokedex"
            width={80}
            onClick={() => setPokedexModalOpen(true)}
          />
        </Boton>
      </Container>

      {/* Modals */}
      {/* BAG */}
          <Modal
            isOpen={bagModalOpen}
            onRequestClose={requestCloseModalOptionsFooter}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
          >
            <div>
              Bag
            </div>
          </Modal>

        {/* POKEBOLL */}
          <Modal
            isOpen={pokeballModalOpen}
            onRequestClose={requestCloseModalOptionsFooter}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
          >
            <div>
              Pokeball
            </div>
          </Modal>

           {/* POKEDEX */}
           <Modal
            isOpen={pokedexModalOpen}
            onRequestClose={requestCloseModalOptionsFooter}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
          >
            <div>
              Pokedex
            </div>
          </Modal>
        
    </>
  );
}

export default Footer;
