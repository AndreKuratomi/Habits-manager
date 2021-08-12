import FormLogin from "../../Components/FormLogin";
import { PageLoginContainer } from "./styles";
import LoginImg from "../../Assets/loginImg.svg";

const Login = () => {
  return (
    <PageLoginContainer>
      <FormLogin />
      <img src={LoginImg} alt="LoginImage" />
    </PageLoginContainer>
  );
};

export default Login;
