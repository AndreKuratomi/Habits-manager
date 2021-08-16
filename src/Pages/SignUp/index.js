import FormRegister from "../../Components/FormRegister";
import { Container, Backgorund, Content } from "./styles";
import Header from "../../Components/Header";

const SignUp = () => {
  return (
    <>
      <Header />
      <Container>
        <Content>
          <FormRegister />
        </Content>
        <Backgorund />
      </Container>
    </>
  );
};

export default SignUp;
