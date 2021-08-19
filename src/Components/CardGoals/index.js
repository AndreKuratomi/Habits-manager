import {
  IoIosClose,
  IoMdRefreshCircle,
  IoMdRemoveCircle,
} from "react-icons/io";
import { toast } from "react-toastify";
import { useLogin } from "../../Providers/Login";
import api from "../../Services/api";
import Button from "../Button";
import { Container } from "./style";
import BackgroundModal from "../BackgroundModal";
import { useState } from "react";
import ModalPatchGoal from "../ModalPatchGoal";
import { CgCheck } from "react-icons/cg";

const CardGoals = ({ goal, goals, setGoa }) => {
  const { user } = useLogin();
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const handleDeleteGoal = (id) => {
    const newGoals = goals.filter((item) => item.id !== id);
    api
      .delete(`/goals/${id}/`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((_) => {
        setGoa(newGoals);
        toast.success("Meta Deletada");
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container goal={goal}>
      <BackgroundModal
        children={
          <ModalPatchGoal
            close={closeModal}
            goal={goal}
            goals={goals}
            setGoa={setGoa}
          />
        }
        modal={modal}
      />
      <header>
        <h1>Meta</h1>
      </header>

      <div className="achieved">
        {goal.achieved === true ? (
          <CgCheck color="var(--green)" />
        ) : (
          <IoIosClose color="var(--orange)" />
        )}
      </div>

      <p>
        <strong>Nome:</strong>
        <br /> {goal.title}
      </p>
      <p>
        <strong>Dificuldade:</strong>
        <br /> {goal.difficulty}
      </p>
      <p>
        <strong>Quantos fizeram:</strong>
        <br /> {goal.how_much_achieved}
      </p>

      <div className="buttons">
        <Button onClick={openModal}>
          <IoMdRefreshCircle />
        </Button>
        <Button onClick={() => handleDeleteGoal(goal.id)}>
          <IoMdRemoveCircle />
        </Button>
      </div>
    </Container>
  );
};

export default CardGoals;
