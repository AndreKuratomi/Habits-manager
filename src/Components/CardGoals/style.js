import styled from "styled-components";

export const Container = styled.div`
    margin: 20px;
    max-width: 500px;
    display: flex;
    flex-flow: column;
    align-items: center;
    border: 1px solid var(--black);
    background: var(--white);
    box-shadow: 8px 8px 0 -1px var(--black);
    padding-bottom: 20px;

    header {
        width: 100%;
        height: 60px;
        text-align: center;
        font-size: 1.7rem;
        padding-top: 15px;
        margin-bottom: 20px;
        color: var(--black);
        border-bottom: 1px solid var(--black);
    }
    
    div {
        border-left: 3px solid var(--orange);
        width: 90%;
        margin-bottom: 15px;
        p {
            text-align: left;
            padding: 0 5px;
            font-size: 1.2rem;
            font-weight: bold;
        }

        span {
            width: 80%;
            text-align: left;
            padding: 0 10px;

        }
    }
`;