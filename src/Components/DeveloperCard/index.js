import { DeveloperCardContainer } from "./styles";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
const DeveloperCard = ({ developer }) => {
  // const { linkedin, github, instagram } = developer;

  return (
    <DeveloperCardContainer>
      <img src="https://picsum.photos/id/1/100/100" alt="DeveloperIMG" />
      <p>Fernando Vieira</p>
      <ul>
        <li>
          <a href="#" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href="#" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="#" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
        </li>
      </ul>
    </DeveloperCardContainer>
  );
};

export default DeveloperCard;
