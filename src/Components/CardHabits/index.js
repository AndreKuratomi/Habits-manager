import { Container } from "./style";
import { CgCheck } from "react-icons/cg";
import { IoIosClose } from "react-icons/io"
const Card = ( { achieved } ) => {


    return (
        <Container achieved={achieved}> 
            <header>Habito</header>
                <div>
                    <h1>Saude</h1>
                    {
                            achieved ?
                            <CgCheck color="var(--green)" />
                            :
                            <IoIosClose color="red" />
                    }   
                </div>
                <p>Dificuldade: Facil</p>
                <p>Frequência: Semanal</p>
        </Container>
    )
}

export default Card;