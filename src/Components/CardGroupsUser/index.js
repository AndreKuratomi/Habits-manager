import { Container } from "./styles";
import { useState } from "react";
import BackgroundModal from "./../BackgroundModal";
import ModalGroup from "../ModalGroup";
import { Header } from "../CardGroupSub/styles";

const CardGroupsUser = ({ group }) => {
  const { name, description } = group;
  const nam = name.length > 40 ? name.substring(0, 40) + '...' : name;
  const desc = description.length > 74 ? description.substring(0, 74) + '...' : description;

  const [modal, setModal] = useState(false);
  
  const openModal = () => setModal(true);
  const closeModal = () => setModal(false); 

  return (
    <>
      <BackgroundModal 
        children={<ModalGroup close={closeModal} group={group}/>}
        modal={modal}  
      />
      <Container onClick={() => openModal()}>
        <h3>{nam}</h3>
        <p>{desc}</p>
      </Container>
    </>
  );
}

export default CardGroupsUser;