import { LoginProvider } from "./Login";
import { RegisterProvider } from "./Register";
import { UserProvider } from "./User";

const Providers = ({ children }) => {
  return (
    <LoginProvider>
      <RegisterProvider>
        <UserProvider>
          {children}
        </UserProvider>
      </RegisterProvider>
    </LoginProvider>
  );
};

export default Providers;
