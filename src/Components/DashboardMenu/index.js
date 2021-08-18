import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { HiOutlineUserGroup, HiOutlineHome } from "react-icons/hi";
import { IoPersonOutline } from "react-icons/io5";
import { useHistory } from "react-router-dom";

import { Container, Button } from "./styles";

const DashboardMenu = ({ setMenuItem }) => {
  const history = useHistory();

  const handleHome = () => {
    history.push("/");
  };

  const handleHabits = () => {
    setMenuItem("Habits");
  };

  const handleSubGroups = () => {
    setMenuItem("SubGroups");
  };

  const handleAllGroups = () => {
    setMenuItem("AllGroups");
  };

  return (
    <Container>
      <Button onClick={handleHome}>
        <HiOutlineHome />
      </Button>
      <Button onClick={handleHabits}>
        <IoPersonOutline />
      </Button>
      <Button onClick={handleSubGroups}>
        <AiOutlineUsergroupAdd />
      </Button>
      <Button onClick={handleAllGroups}>
        <HiOutlineUserGroup />
      </Button>
    </Container>
  );
};

export default DashboardMenu;
