import { AuthProvider } from "./Auth";

import { LoginProvider } from "./Login";
import { RegisterProvider } from "./Register";
import { UserProvider } from "./User";

import { HabitsProvider } from "./CreateHabits";
// import { DeleteProvider } from "./DeleteElements";
import { CardsProvider } from "./Cards";

import { GroupsSubsProvider } from "./GroupsSubs";
import { GroupsListProvider } from "./GroupsList";

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <LoginProvider>
        <RegisterProvider>
          <UserProvider>
            <HabitsProvider>
              <CardsProvider>
                {/* <DeleteProvider> */}
                <GroupsListProvider>
                  <GroupsSubsProvider>{children}</GroupsSubsProvider>
                </GroupsListProvider>
                {/* </DeleteProvider> */}
              </CardsProvider>
            </HabitsProvider>
          </UserProvider>
        </RegisterProvider>
      </LoginProvider>
    </AuthProvider>
  );
};

export default Providers;
