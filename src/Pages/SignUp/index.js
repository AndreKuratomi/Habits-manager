import Header from "../../Components/Header";
import FormRegister from "../../Components/FormRegister";

import registerImg from "../../Assets/register.svg";

import { RegisterContainer, Image, Content } from "./styles";

const SignUp = () => {
  return (
    <>
      <Header />
      <RegisterContainer>
        <Content>
          <FormRegister />
        </Content>
        <Image>
          <img src={registerImg} alt="LoginImage" />
        </Image>
      </RegisterContainer>
    </>
  );
};

export default SignUp;
