import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { toast } from "react-toastify";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useLogin } from "../../Providers/Login";
import api from "../../Services/api";

import Button from "../Button";
import { UserCardContainer, UserImage, UpdateUserContainer } from "./styles";

const UserCard = () => {
  const { id } = useLogin();
  const token = JSON.parse(localStorage.getItem("@Habits:access"));
  const [user, setUser] = useState({});
  const [show, setShow] = useState(false);

  const schema = yup.object().shape({
    username: yup.string(),
  });

  useEffect(() => {
    if (id !== "") {
      api
        .get(`/users/${id}/`)
        .then((resp) => {
          setUser({ ...resp.data, token: token });
        })
        .catch((err) => console.log(err));
    }
  }, [id, token, user]);

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const handleUpdateProfile = (data) => {
    api
      .patch(`/users/${id}/`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        toast.success("Nome alterado com sucesso");
        setShow(false);
      })
      .catch((_) => toast.error("Nome já cadastrado"));
  };

  return (
    <UserCardContainer>
      <UserImage>
        <span>{user.username ? user.username[0] : null}</span>
      </UserImage>

      <h2>{user.username ? user.username : ""}</h2>

      <FaEdit onClick={() => setShow(true)} />

      <UpdateUserContainer
        onSubmit={handleSubmit(handleUpdateProfile)}
        show={show}
      >
        <ImCross onClick={() => setShow(false)} />
        <input {...register("username")} placeholder="Novo nome" />
        <Button type="submit">Atualizar</Button>
      </UpdateUserContainer>
    </UserCardContainer>
  );
};

export default UserCard;
