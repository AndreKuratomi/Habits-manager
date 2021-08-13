import { DeveloperCardContainer } from "./styles";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
const DeveloperCard = ({ developer }) => {
  const { name, img, social } = developer;

  return (
    <DeveloperCardContainer>
      <img src={img} alt={name} />
      <p>{name}</p>
      <ul>
        <li>
          <a href={social.linkedin} target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href={social.github} target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href={social.instagram} target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
        </li>
      </ul>
    </DeveloperCardContainer>
  );
};

export default DeveloperCard;
