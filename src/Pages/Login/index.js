import { Redirect } from "react-router-dom";

import Header from "../../Components/Header";
import FormLogin from "../../Components/FormLogin";

import LoginImg from "../../Assets/loginImg.svg";
import { useAuth } from "../../Providers/Auth";

import { Content, Image, LoginContainer } from "./styles";

const Login = () => {
  const { auth } = useAuth();

  if (auth) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <>
      <Header />
      <LoginContainer>
        <Content>
          <FormLogin />
        </Content>
        <Image>
          <img src={LoginImg} alt="LoginImage" />
        </Image>
      </LoginContainer>
    </>
  );
};

export default Login;
