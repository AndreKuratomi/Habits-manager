import { Link } from "react-router-dom";
import { HeaderContainer } from "./styles";
import ImgProfile from "../../Assets/charMale.png";

const Header = ({ children }) => {
  return (
    <HeaderContainer>
      <Link to="/">
        <span>Habits</span>
      </Link>

      <img src={ImgProfile} alt="ProfilePhoto" />

      <div>{children}</div>
    </HeaderContainer>
  );
};

export default Header;
