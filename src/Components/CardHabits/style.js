import styled from "styled-components";

export const Container = styled.div`
    margin: 20px;

    width: 250px;
    display: flex;
    flex-flow: column;
    align-items: center;
    border: 1px solid var(--black);
    background: var(--white);
    box-shadow: 8px 8px 0 -1px var(--black);

    header {
        width: 100%;
        height: 60px;
        text-align: center;
        font-size: 1.7rem;
        padding-top: 15px;
        color: var(--black);
        border-bottom: 1px solid var(--black);
    }

    h1 {
        font-size: 1.5rem;
        width: 100%;
    }
    
    p {
        width: 80%;
        text-align: left;
        margin: 10px;
        padding: 0 5px;
        border-left: 3px solid var(--orange);
        font-size: 1.2rem;

        &:last-child {
            margin-bottom: 30px;
        }
    }

    div {
        width: 80%;
        height: 50px;
        font-size: 1.2rem;
        display: flex;
        align-items: center;
        margin: 10px;
        
        svg {
            width: 46px;
            height: 40px;
            border-radius: 50%;
            background: ${props => props.achieved ? "rgba(0,255,0,0.1);" : "rgb(224, 145, 104, 0.3);"} ;
        }
    }
`;