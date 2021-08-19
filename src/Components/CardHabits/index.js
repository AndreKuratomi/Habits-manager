import { useState } from "react";

import { CgCheck } from "react-icons/cg";
import {
  IoIosClose,
  IoMdRemoveCircle,
  IoMdRefreshCircle,
} from "react-icons/io";

import { useCards } from "../../Providers/Cards";

import Button from "../Button";
import ModalPatch from "../ModalPatch";

import { Container } from "./style";

const CardHabits = ({ card }) => {
  const { deleteElements } = useCards();

  const [patchModal, setPatchModal] = useState(false);
  const openPatchModal = () => {
    setPatchModal(true);
  };
  const closePatchModal = () => {
    setPatchModal(false);
  };

  return (
    <Container card={card}>
      <header>
        <h1>{card.title}</h1>
      </header>
      <div className="category">
        <h2>{card.category}</h2>
        {card.achieved === true ? (
          <CgCheck color="var(--green)" />
        ) : (
          <IoIosClose color="var(--orange)" />
        )}
      </div>

      <p>Dificuldade: {card.difficulty}</p>
      <p>Frequência: {card.frequency}</p>
      <p>Alcançado: {card.how_much_achieved}%</p>

      <div className="buttons">
        <Button onClick={() => openPatchModal()}>
          <IoMdRefreshCircle />
        </Button>
        <Button onClick={() => deleteElements(card.id)}>
          <IoMdRemoveCircle />
        </Button>
      </div>
      {patchModal === true ? (
        <>
          <ModalPatch close={closePatchModal} card={card} />
        </>
      ) : (
        <></>
      )}
    </Container>
  );
};

export default CardHabits;
