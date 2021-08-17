import { FaEdit } from "react-icons/fa";

import { useUser } from "../../Providers/User";
import { UserCardContainer, UserImage } from "./styles";

const UserCard = () => {
  // const { user } = useUser();
  // console.log(user.username[0]);
  return (
    <UserCardContainer>
      {/* <UserImage>
        <span>{user?.username[0]}</span>
      </UserImage>
      <h2>{user?.username}</h2>
      <FaEdit /> */}
    </UserCardContainer>
  );
};

export default UserCard;
