import { Header } from "./Header";

export const SidebarJefe = ({ children }) => {
  return (
    <>
      {/** Main Content */}
      <div>
        <Header />
        {children}
      </div>
    </>
  );
};
