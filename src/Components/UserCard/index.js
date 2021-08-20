import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { toast } from "react-toastify";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useUser } from "../../Providers/User";
import api from "../../Services/api";

import Button from "../Button";
import { UserCardContainer, UserImage, UpdateUserContainer } from "./styles";

const UserCard = () => {
  const { user, setUser } = useUser();
  const [show, setShow] = useState(false);

  const schema = yup.object().shape({
    username: yup.string(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const handleUpdateProfile = (data) => {
    api
      .patch(`/users/${user.id}/`, data, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((_) => {
        toast.success("Nome alterado com sucesso");
        setShow(false);
        setUser({
          name: data.username,
          id: user.id,
          token: user.token
        });
        localStorage.setItem(
          "@Habits:user",
          JSON.stringify({
            name: data.username,
            id: user.id,
            token: user.token
          }))
      })
      .catch((_) => toast.error("Nome já cadastrado"));
  };

  return (
    <UserCardContainer>
      <UserImage>
        <span>{user.name ? user.name[0] : null}</span>
      </UserImage>

      <h2>{user.name ? user.name : ""}</h2>

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
