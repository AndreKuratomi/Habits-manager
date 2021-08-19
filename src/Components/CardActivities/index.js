import { useState } from "react";
import { IoMdRefreshCircle, IoMdRemoveCircle } from "react-icons/io";
import { toast } from "react-toastify";
import { useLogin } from "../../Providers/Login";
import api from "../../Services/api";
import BackgroundModal from "../BackgroundModal";
import Button from "../Button";
import ModalPatchActivity from "../ModalPatchActivity";
import { Container } from "./style";

const CardActivities = ({ activity, activities, setActiv }) => {
  const { user } = useLogin();
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };

  const handleDeleteActivity = (id) => {
    const newActivities = activities.filter((item) => item.id !== id);

    api
      .delete(`/activities/${id}/`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((_) => {
        setActiv(newActivities);
        toast.success("Atividade Deletada");
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <BackgroundModal
        children={<ModalPatchActivity close={closeModal} activity={activity} />}
        modal={modal}
      />
      <header>
        <h1>Atividade</h1>
      </header>
      <p>{activity.title}</p>
      <p>
        <strong>Data pra realizacao:</strong> {activity.realization_time}
      </p>
      <div className="buttons">
        <Button onClick={openModal}>
          <IoMdRefreshCircle />
        </Button>
        <Button onClick={() => handleDeleteActivity(activity.id)}>
          <IoMdRemoveCircle />
        </Button>
      </div>
    </Container>
  );
};

export default CardActivities;
