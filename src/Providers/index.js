import { LoginProvider } from "./Login";
import { RegisterProvider } from "./Register";
import { UserProvider } from "./User";
import { GroupsSubsProvider } from "./GroupsSubs";

const Providers = ({ children }) => {
  return (
    <LoginProvider>
      <RegisterProvider>
        <UserProvider>
          <GroupsSubsProvider>
            {children}
          </GroupsSubsProvider>
        </UserProvider>
      </RegisterProvider>
    </LoginProvider>
  );
};

export default Providers;
