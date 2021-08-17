import { AuthProvider } from "./Auth";
import { LoginProvider } from "./Login";
import { RegisterProvider } from "./Register";
import { UserProvider } from "./User";
import { GroupsSubsProvider } from "./GroupsSubs";
import { HabitsProvider } from "./CreateHabits";
import { CardsProvider } from "./Cards";

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <LoginProvider>
        <RegisterProvider>
          <UserProvider>
            <HabitsProvider>
              <CardsProvider>
                <GroupsSubsProvider>{children}</GroupsSubsProvider>
              </CardsProvider>
            </HabitsProvider>
          </UserProvider>
        </RegisterProvider>
      </LoginProvider>
    </AuthProvider>
  );
};

export default Providers;
