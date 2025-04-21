import { Header } from "./Header";
import { HeaderMecanico } from "./HeaderMecanico";

export const SidebarMecanico = ({ children }) => {
  return (
    <>
      {/** Main Content */}
      <div>
        <HeaderMecanico />
        {children}
      </div>
    </>
  );
};
