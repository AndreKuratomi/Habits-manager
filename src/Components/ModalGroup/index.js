import ListActivities from "../ListActivities";
import ListGoals from "../ListGoals";
import { Container } from "./styles";

const ModalGroup = ( { close, group } ) => {
    return(
        <Container>
            <header>
                <div>
                    <h1>{group.name}</h1>
                    <button onClick={() => close()}>X</button>
                </div>
                <div>
                    <p>{group.description}</p>
                    <p>{group.creator.username}</p>
                </div>
            </header>
            
            <main>
                <section>
                    <ListActivities activities={group.activities}/>
                </section>
                <section>
                    <ListGoals goals={group.goals}/>
                </section>
            </main>
        </Container>
    )
}

export default ModalGroup;