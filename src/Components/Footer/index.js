import { useState } from "react";
import DeveloperCard from "../DeveloperCard";
import { FooterContainer } from "./styles";

const Footer = () => {
  const [developers] = useState([
    {
      id: 1,
      name: "André Kuratomi",
      img: "https://picsum.photos/id/1/100/100",
      social: { linkedin: "#", github: "#", instagram: "#" },
    },
    {
      id: 2,
      name: "Fernando Vieira",
      img: "https://picsum.photos/id/1/100/100",
      social: { linkedin: "#", github: "#", instagram: "#" },
    },
    {
      id: 3,
      name: "Guilherme Barreto",
      img: "https://picsum.photos/id/1/100/100",
      social: { linkedin: "#", github: "#", instagram: "#" },
    },
    {
      id: 4,
      name: "Miguel Maurer",
      img: "https://picsum.photos/id/1/100/100",
      social: { linkedin: "#", github: "#", instagram: "#" },
    },
    {
      id: 5,
      name: "Rodrigo Diniz",
      img: "https://picsum.photos/id/1/100/100",
      social: { linkedin: "#", github: "#", instagram: "#" },
    },
  ]);

  return (
    <FooterContainer>
      <h2>Quem fez...</h2>
      <section>
        {developers.map((developer) => (
          <DeveloperCard key={developer.id} developer={developer} />
        ))}
      </section>
    </FooterContainer>
  );
};

export default Footer;
