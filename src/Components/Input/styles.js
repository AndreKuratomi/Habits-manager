import styled, { css } from "styled-components";

export const Container = styled.div`
    width: 300px;
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
        color: red;
        margin-bottom: 10px;
    }
`;

export const InputContainer = styled.div`
    border: 2px solid var(--black);
    color: var(--black);
    padding: 0 10px;
    height: 30px;
    width: 100%;
    display: flex;
    align-items: center;
    transition: .4s;

    ${(props) => props.isErrored && css`
        border: 2px solid red;
        margin-bottom: 0;

        svg {
            color: red;
        }
    `}

    input {
        width: 100%;
        margin-left: 8px;
        background: transparent;
        color: var(--black);
        outline: none;
        border: none;

        &::placeholder {
            color: gray;
        }
    }
`;