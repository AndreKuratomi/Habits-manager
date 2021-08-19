import { AuthProvider } from "./Auth";

import { LoginProvider } from "./Login";
import { RegisterProvider } from "./Register";
import { UserProvider } from "./User";

import { HabitsProvider } from "./CreateHabits";
import { UpdateProvider } from "./UpdateHabits";
import { CardsProvider } from "./Cards";

import { GroupsSubsProvider } from "./GroupsSubs";
import { GroupsListProvider } from "./GroupsList";

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <LoginProvider>
        <RegisterProvider>
          <UserProvider>
            <UpdateProvider>
              <HabitsProvider>
                <CardsProvider>
                  <GroupsListProvider>
                    <GroupsSubsProvider>{children}</GroupsSubsProvider>
                  </GroupsListProvider>
                </CardsProvider>
              </HabitsProvider>
            </UpdateProvider>
          </UserProvider>
        </RegisterProvider>
      </LoginProvider>
    </AuthProvider>
  );
};

export default Providers;
