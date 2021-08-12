import { FaEdit } from "react-icons/fa";
import { UserCardContainer } from "./styles";
import ImgProfile from "../../Assets/charMale.png";

const UserCard = () => {
  return (
    <UserCardContainer>
      <img src={ImgProfile} alt="ProfilePhoto" />
      <h2>Username</h2>
      <FaEdit />
    </UserCardContainer>
  );
};

export default UserCard;
