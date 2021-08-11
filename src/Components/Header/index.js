import { HeaderContainer } from "./styles";

const Header = ({ children }) => {
  return (
    <HeaderContainer>
      <img src="https://picsum.photos/id/1/40/40" alt="Logo" />
      <div>{children}</div>
    </HeaderContainer>
  );
};

export default Header;
