import { useState } from "react";
import { FcHome } from "react-icons/fc";
import { FcReadingEbook } from "react-icons/fc";
import { FcConferenceCall } from "react-icons/fc";
import { FcBullish } from "react-icons/fc";
import { FcTodoList } from "react-icons/fc";
import { Container, Button } from "./styles";

const DashboardMenu = () => {
  const [mensage, setMensage] = useState(false);
  const [mensage2, setMensage2] = useState(false);
  const [mensage3, setMensage3] = useState(false);
  const [mensage4, setMensage4] = useState(false);
  const [mensage5, setMensage5] = useState(false);

  return (
    <Container>
      <Button
        className="btn-Home"
        onMouseOver={() => setMensage(!mensage)}
        onMouseOut={() => setMensage(!mensage)}
      >
        {mensage && <p className="msg-Home">Home</p>}

        <FcHome />
      </Button>
      <Button
        className="btn-Habits"
        onMouseOver={() => setMensage2(!mensage2)}
        onMouseOut={() => setMensage2(!mensage2)}
      >
        {mensage2 && <p className="msg-Habits">Hábitos</p>}

        <FcReadingEbook />
      </Button>
      <Button
        className="btn-Group"
        onMouseOver={() => setMensage3(!mensage3)}
        onMouseOut={() => setMensage3(!mensage3)}
      >
        {mensage3 && <p className="msg-Group">Grupos</p>}

        <FcConferenceCall />
      </Button>
      <Button
        className="btn-Goal"
        onMouseOver={() => setMensage4(!mensage4)}
        onMouseOut={() => setMensage4(!mensage4)}
      >
        {mensage4 && <p className="msg-Goal">Metas</p>}

        <FcBullish />
      </Button>
      <Button
        className="btn-Activities"
        onMouseOver={() => setMensage5(!mensage5)}
        onMouseOut={() => setMensage5(!mensage5)}
      >
        {mensage5 && <p className="msg-Activities">Atividades</p>}
        <FcTodoList />
      </Button>
    </Container>
  );
};

export default DashboardMenu;
