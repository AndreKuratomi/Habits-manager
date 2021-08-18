import { AuthProvider } from "./Auth";

import { LoginProvider } from "./Login";
import { RegisterProvider } from "./Register";
import { UserProvider } from "./User";

import { HabitsProvider } from "./CreateHabits";
import { CardsProvider } from "./Cards";

import { GroupsSubsProvider } from "./GroupsSubs";
import { GroupsListProvider } from "./GroupsList";
import { GroupProvider } from "./CreateGroup";
import { JoinGroupProvider } from "./JoinGroup";

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <LoginProvider>
        <RegisterProvider>
          <UserProvider>
            <HabitsProvider>
              <CardsProvider>
                <GroupsListProvider>
                  <GroupProvider>
                    <JoinGroupProvider>
                      <GroupsSubsProvider>{children}</GroupsSubsProvider>
                    </JoinGroupProvider>
                  </GroupProvider>
                </GroupsListProvider>
              </CardsProvider>
            </HabitsProvider>
          </UserProvider>
        </RegisterProvider>
      </LoginProvider>
    </AuthProvider>
  );
};

export default Providers;
