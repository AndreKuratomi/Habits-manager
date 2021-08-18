import {
  FcHome,
  FcReadingEbook,
  FcConferenceCall,
  FcBullish,
} from "react-icons/fc";

import { Container, Button } from "./styles";

const DashboardMenu = ({ setMenuItem }) => {
  const handleHome = () => {};

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
      <Button>
        <FcHome />
      </Button>
      <Button onClick={handleHabits}>
        <FcReadingEbook />
      </Button>
      <Button onClick={handleSubGroups}>
        <FcConferenceCall />
      </Button>
      <Button onClick={handleAllGroups}>
        <FcBullish />
      </Button>
    </Container>
  );
};

export default DashboardMenu;
