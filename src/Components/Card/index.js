import { Container } from "./style";
import { CgCheck } from "react-icons/cg";
import { IoIosClose } from "react-icons/io"
const Card = ( { dark, title, category, achieved, difficulty, frequency, howMuch, time } ) => {
    return (
        <Container achieved={achieved} category={category}> 
            <header>{title}</header>
            {
                category && 
                <div>
                    <h1>{category}</h1>
                    {
                            achieved ?
                            <CgCheck color="var(--green)" />
                            :
                            <IoIosClose color="red" />
                    }   
                </div>
            }
            {
                difficulty && 
                <p>Dificuldade: {difficulty}</p>
            }
            {   
                frequency && 
                <p>Frequência: {frequency}</p>
            }
            {
                howMuch &&
                <p>{howMuch}</p>
            }
            {
                time &&
                <p>Hora da realização da atividade: {time}</p>
            }
        </Container>
    )
}

export default Card;

/*

    title ///
    difficult //
    how much achivied //
    category /
    frequency /
    achieved /
    realization time /

*/