import { useHistory } from "react-router-dom";

import Button from "../Button";
import notFound from "./../../Assets/notFound.svg";
import { useUser } from "../../Providers/User";

import { Container, Image } from "./styles";

const NotFound = () => {
  const history = useHistory();
  const { auth } = useUser();

  const goBack = () => {
    if (auth) {
      return history.push("/dashboard");
    }
    return history.push("/");
  };

  return (
    <Container>
      <Image>
        <img src={notFound} alt="erro404" />
      </Image>
      <Button onClick={goBack}>Voltar</Button>
    </Container>
  );
};

export default NotFound;
