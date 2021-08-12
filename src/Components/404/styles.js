import styled from "styled-components";
import notFound from "./../../Assets/notFound.svg";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;

    p {
        font-size: 2rem;
        margin: 40px 0;
    }

    @media (min-width: 1024px) {
        align-items: stretch;

        p {
            display: none;
        }
    }    
`;

export const BackGround = styled.div`

    @media (min-width: 1024px) {
        flex: 1;
        background: url(${notFound}) no-repeat center;
        background-size: contain;
    }
`; 