import { UserProvider } from "./User";
import { RegisterProvider } from "./Register";

import { HabitsProvider } from "./Habits";
import { UpdateProvider } from "./Update";

import { GroupsSubsProvider } from "./GroupsSubs";
import { GroupsListProvider } from "./GroupsList";

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <RegisterProvider>
        <UpdateProvider>
          <HabitsProvider>
            <GroupsListProvider>
              <GroupsSubsProvider>{children}</GroupsSubsProvider>
            </GroupsListProvider>
          </HabitsProvider>
        </UpdateProvider>
      </RegisterProvider>
    </UserProvider>
  );
};

export default Providers;
