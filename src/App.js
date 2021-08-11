import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Components/Header";
import Buttons from "./Components/Button";
import Routes from "./Routes";

import GlobalStyle from "./Styles/global";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Header>
        <Buttons>Login</Buttons>
        <Buttons>Cadastro</Buttons>
      </Header>
      <Routes />
    </>
  );
};

export default App;
