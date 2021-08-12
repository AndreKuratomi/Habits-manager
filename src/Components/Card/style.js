import styled from "styled-components";

export const Container = styled.div`

    width: 300px;
    /* height: 30vh; */
    border-radius: 10px;
    display: flex;
    flex-flow: column;
    align-items: center;
    border: 2px solid var(--black);
    background: var(--white);

    header {
        width: 90%;
        height: 60px;
        text-align: center;
        font-size: 1.7rem;
        padding-top: 15px;
        border-radius: 10px 10px 0 0;
        border-bottom: var(--orange) 2px solid;
        margin-bottom: ${props => props.category ? 0 : "30px"};
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
        border-left: 3px solid var(--green);
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
            background: ${props => props.achieved ? "rgba(0,255,0,0.1);" : "rgba(255,0,0,0.1);"} ;
        }
    }
`;