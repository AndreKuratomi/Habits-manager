import { Background } from "./styles";

const BackgroundModal = ( { modal, children} ) => {
    return <Background modal={modal}>{children}</Background>;
}

export default BackgroundModal;