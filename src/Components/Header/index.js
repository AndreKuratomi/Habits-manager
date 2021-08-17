import { Link } from "react-router-dom";
import { HeaderContainer } from "./styles";
import UserCard from "../UserCard";
const Header = ({ children, isLogged = false }) => {
  return (
    <HeaderContainer isLogged={isLogged}>
      <Link to="/">
        <span>Habits</span>
      </Link>

      {isLogged ? <UserCard /> : <div>{children}</div>}
    </HeaderContainer>
  );
};

export default Header;
