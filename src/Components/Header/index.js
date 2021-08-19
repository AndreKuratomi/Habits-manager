import { Link } from "react-router-dom";
import { HeaderContainer } from "./styles";
import { useHistory } from "react-router-dom";
import Button from "../Button";
import { useUser } from "../../Providers/User";
import UserLogged from "../UserLogged";

const Header = () => {
  const history = useHistory();
  const { auth } = useUser();

  return (
    <HeaderContainer>
      <Link to="/">
        <span>Habits</span>
      </Link>
      {
        auth ?
          <div>
            <UserLogged />
          </div>
          :
          <div>
            <Button onClick={() => history.push("/login")}>Login</Button>
            <Button onClick={() => history.push("/signup")}>Cadastro</Button>
          </div>
      }
    </HeaderContainer>
  );
};

export default Header;
