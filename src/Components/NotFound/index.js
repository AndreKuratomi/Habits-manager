import { useHistory } from "react-router-dom";

import Button from "../Button";
import notFound from "./../../Assets/notFound.svg";

import { Container, Image } from "./styles";

const NotFound = () => {
  const history = useHistory();

  return (
    <Container>
      <Image>
        <img src={notFound} alt="erro404" />
      </Image>
      <Button onClick={() => history.push("/")}>Voltar</Button>
    </Container>
  );
};

export default NotFound;
