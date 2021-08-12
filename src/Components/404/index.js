import Button from "../Button";
import { Container, BackGround } from "./styles"
import { useHistory } from "react-router-dom";

const NotFound = () => {

    const history = useHistory();

    return (
        <Container>
            <p>Página não encontrada.</p>
            <BackGround/>
            <Button onClick={() => history.push("/dashboard")}>Voltar</Button>
        </Container>
    )
}

export default NotFound;