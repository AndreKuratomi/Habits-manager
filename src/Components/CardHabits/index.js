import { Container } from "./style";
import { CgCheck } from "react-icons/cg";
import { IoIosClose } from "react-icons/io";

const CardHabits = ( { achieved } ) => {

    return (
        <Container achieved={achieved}> 
            <header>
			    <h1>Habito</h1>
			</header>
                <div>
                    <h1>Saude</h1>
                    {
                            achieved ?
                            <CgCheck color="var(--green)" />
                            :
                            <IoIosClose color="var(--orange)" />
                    }   
                    
                </div>
                <p>Dificuldade: Facil</p>
                <p>Frequência: Semanal</p>
        </Container>
    )
}

export default CardHabits;