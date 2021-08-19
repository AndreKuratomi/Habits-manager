import { useState } from "react";

import { CgCheck } from "react-icons/cg";
import {
  IoIosClose,
  IoMdRemoveCircle,
  IoMdRefreshCircle,
} from "react-icons/io";

import { useHabits } from "../../Providers/Habits";

import Button from "../Button";
import ModalPatchHabit from "../ModalPatchHabit";
import BackgroundModal from "../BackgroundModal";

import { Container } from "./style";

const CardHabits = ({ card }) => {
  const { deleteElement } = useHabits();

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
        <Button onClick={() => deleteElement(card.id)}>
          <IoMdRemoveCircle />
        </Button>
      </div>

      <BackgroundModal
        children={<ModalPatchHabit close={closePatchModal} card={card} />}
        modal={patchModal}
      />
    </Container>
  );
};

export default CardHabits;
