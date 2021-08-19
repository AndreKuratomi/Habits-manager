import Header from "../../Components/Header";
import FormRegister from "../../Components/FormRegister";

import registerImg from "../../Assets/register.svg";

import { RegisterContainer, Image, Content } from "./styles";
import { useUser } from "../../Providers/User";
import { Redirect } from "react-router-dom";

const SignUp = () => {
  const { auth } = useUser();

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
