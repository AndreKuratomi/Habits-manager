import { Redirect } from "react-router-dom";

import Header from "../../Components/Header";
import FormLogin from "../../Components/FormLogin";

import LoginImg from "../../Assets/loginImg.svg";
import { Content, Image, LoginContainer } from "./styles";

const Login = () => {
  const token = JSON.parse(localStorage.getItem("@Habits:access")) || "";

  if (token !== "") {
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
