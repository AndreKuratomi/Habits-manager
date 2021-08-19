// import { useHistory } from "react-router-dom";

import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
// import Button from "../../Components/Button";

import ImgHome1 from "../../Assets/HomeImg1.svg";

import { HomeContainer } from "./styles";

const Home = () => {
  // const history = useHistory();

  return (
    <HomeContainer>
      <Header />

      <main>
        <section>
          <article>
            <h2>Habits</h2>
            <p>
              Crie bons hábitos, se conecte com grupos do seu interesse, defina metas e atividades para descobrir o que há de melhor em você!
            </p>
          </article>
          <figure>
            <img src={ImgHome1} alt="HomeIMG" />
            <figcaption>Home Img</figcaption>
          </figure>
        </section>
      </main>
      <Footer />
    </HomeContainer>
  );
};

export default Home;
