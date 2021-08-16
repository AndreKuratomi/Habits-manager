import { AuthProvider } from "./Auth";
import { LoginProvider } from "./Login";
import { RegisterProvider } from "./Register";
import { UserProvider } from "./User";
<<<<<<< HEAD
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
=======
import { GroupsSubsProvider } from "./GroupsSubs";

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <LoginProvider>
        <RegisterProvider>
          <UserProvider>
            <GroupsSubsProvider>{children}</GroupsSubsProvider>
          </UserProvider>
        </RegisterProvider>
      </LoginProvider>
    </AuthProvider>
>>>>>>> 379dda2fc28fc0c0deabd2a450aef0378353a0ec
  );
};

export default Providers;
