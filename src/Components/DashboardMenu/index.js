// import { useState } from "react";
import { FcHome } from "react-icons/fc";
import { FcReadingEbook } from "react-icons/fc";
import { FcConferenceCall } from "react-icons/fc";
import { FcBullish } from "react-icons/fc";
import { Container, Button } from "./styles";
import { useHistory } from "react-router-dom";

const DashboardMenu = () => {
  // const [mensage, setMensage] = useState(false);
  // const [mensage2, setMensage2] = useState(false);
  // const [mensage3, setMensage3] = useState(false);
  // const [mensage4, setMensage4] = useState(false);
  const history = useHistory();

  return (
    <Container>
      <Button
        className="btn-Home"
        // onMouseOver={() => setMensage(!mensage)}
        // onMouseOut={() => setMensage(!mensage)}
        onClick={() => history.push("/")}
      >
        {/* {mensage && <p className="msg-Home">Home</p>} */}

        <FcHome />
      </Button>
      <Button
        className="btn-Habits"
        // onMouseOver={() => setMensage2(!mensage2)}
        // onMouseOut={() => setMensage2(!mensage2)}
        onClick={() => history.push("/dashboard")}

      >
        {/* {mensage2 && <p className="msg-Habits">Hábitos</p>} */}

        <FcReadingEbook />
      </Button>
      <Button
        className="btn-Group"
        // onMouseOver={() => setMensage3(!mensage3)}
        // onMouseOut={() => setMensage3(!mensage3)}
        onClick={() => history.push("/groups")}
      >
        {/* {mensage3 && <p className="msg-Group">UserGroups</p>} */}

        <FcConferenceCall />
      </Button>
      <Button
        className="btn-Goal"
        // onMouseOver={() => setMensage4(!mensage4)}
        // onMouseOut={() => setMensage4(!mensage4)}
        onClick={() => history.push("/discover")}
      >
        {/* {mensage4 && <p className="msg-Goal">AllGroups</p>} */}

        <FcBullish />
      </Button>

    </Container>
  );
};

export default DashboardMenu;
