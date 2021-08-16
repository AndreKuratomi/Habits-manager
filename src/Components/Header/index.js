import { Link } from "react-router-dom";
import { HeaderContainer } from "./styles";

const Header = ({ children }) => {
  return (
    <HeaderContainer>
      <Link to="/">
        <span>Habits</span>
      </Link>

      <div>{children}</div>
    </HeaderContainer>
  );
};

export default Header;
