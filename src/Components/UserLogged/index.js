import { Link } from "react-router-dom";
import Button from "../Button";

import { Container, Logo } from "./styles";

import { useHistory } from "react-router-dom";

const UserLogged = () => {
  const user = JSON.parse(localStorage.getItem("@Habits:user"));
  const history = useHistory();

  const handleLogout = () => {
    localStorage.clear();
    history.push("/");
    window.location.reload();
  };

  return (
    <Container>
      <Link to="/dashboard">
        <Logo>
          <p>{user ? user.name[0] : ""}</p>
        </Logo>
      </Link>
      <Button onClick={handleLogout}>Sair</Button>
    </Container>
  );
}

export default UserLogged;