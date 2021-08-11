import { Button1 } from "./styles";

const Button = ({ children, ...rest }) => {
  return <Button1 {...rest}>{children}</Button1>;
};

export default Button;
