import FormRegister from "../../Components/FormRegister";
import { Container, Backgorund, Content } from "./styles";

const SignUp = () => {
    return (
        <Container>
            <Content>
                <FormRegister />
            </Content>
            <Backgorund />
        </Container>
    )
}

export default SignUp;