import Header from "../../Components/Header";
import FormRegister from "../../Components/FormRegister";

import registerImg from "../../Assets/register.svg";

import { RegisterContainer, Image, Content } from "./styles";
import { useAuth } from "../../Providers/Auth";
import { Redirect } from "react-router-dom";

const SignUp = () => {
  const { auth } = useAuth();

  if (auth) {
    return <Redirect to="/dashboard" />;
  }

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
