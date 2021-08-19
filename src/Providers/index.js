import { AuthProvider } from "./Auth";

import { LoginProvider } from "./Login";
import { RegisterProvider } from "./Register";

import { HabitsProvider } from "./Habits";
import { UpdateProvider } from "./UpdateHabits";

import { GroupsSubsProvider } from "./GroupsSubs";
import { GroupsListProvider } from "./GroupsList";

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <LoginProvider>
        <RegisterProvider>
          <UpdateProvider>
            <HabitsProvider>
              <GroupsListProvider>
                <GroupsSubsProvider>{children}</GroupsSubsProvider>
              </GroupsListProvider>
            </HabitsProvider>
          </UpdateProvider>
        </RegisterProvider>
      </LoginProvider>
    </AuthProvider>
  );
};

export default Providers;
