import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { useLogin } from "../../Providers/Login";

import api from "../../Services/api";
import { UserCardContainer, UserImage } from "./styles";

const UserCard = () => {
  const { id } = useLogin();

  const token = JSON.parse(localStorage.getItem("@Habits:access"));
  const [user, setUser] = useState({});

  useEffect(() => {
    if (id !== "") {
      api
        .get(`/users/${id}/`)
        .then((resp) => {
          setUser({ ...resp.data, token: token });
        })
        .catch((err) => console.log(err));
    }
  }, [id, token]);

  return (
    <UserCardContainer>
      <UserImage>
        <span>{user.username ? user.username[0] : null}</span>
      </UserImage>

      <h2>{user.username ? user.username : ""}</h2>

      <FaEdit />
    </UserCardContainer>
  );
};

export default UserCard;
