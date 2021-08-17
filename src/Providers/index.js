import { AuthProvider } from "./Auth";
import { LoginProvider } from "./Login";
import { RegisterProvider } from "./Register";
import { UserProvider } from "./User";
import { GroupsSubsProvider } from "./GroupsSubs";
import { HabitsProvider } from "./CreateHabits";
import { GroupsListProvider } from "./GroupsList";

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <LoginProvider>
        <RegisterProvider>
          <UserProvider>
            <HabitsProvider>
              <GroupsListProvider>
                <GroupsSubsProvider>{children}</GroupsSubsProvider>
              </GroupsListProvider>
            </HabitsProvider>
          </UserProvider>
        </RegisterProvider>
      </LoginProvider>
    </AuthProvider>
  );
};

export default Providers;
