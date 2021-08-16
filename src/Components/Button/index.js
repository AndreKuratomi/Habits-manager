import { BtnContainer } from "./styles";

const Button = ({ children, ...rest }) => {
  return <BtnContainer {...rest}>{children}</BtnContainer>;
};

export default Button;
