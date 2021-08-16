import { LoginProvider } from "./Login";
import { RegisterProvider } from "./Register";
import { UserProvider } from "./User";
import { HabitsProvider } from "./CreateHabits";

const Providers = ({ children }) => {
  return (
    <LoginProvider>
      <RegisterProvider>
        <HabitsProvider>
          <UserProvider>{children}</UserProvider>
        </HabitsProvider>
      </RegisterProvider>
    </LoginProvider>
  );
};

export default Providers;
