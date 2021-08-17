import { Link } from "react-router-dom";
import { HeaderContainer } from "./styles";
import UserCard from "../UserCard";
const Header = ({ children, isLogged = false, inDesktop = false }) => {
  return (
    <HeaderContainer isLogged={isLogged} inDesktop={inDesktop}>
      <Link to="/">
        <span>Habits</span>
      </Link>

      {isLogged ? (
        inDesktop ? (
          <div>{children}</div>
        ) : (
          <UserCard />
        )
      ) : (
        <div>{children}</div>
      )}
    </HeaderContainer>
  );
};

export default Header;
