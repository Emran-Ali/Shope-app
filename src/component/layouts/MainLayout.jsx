import { Outlet } from "react-router-dom";
import MenuAppBar from "../../pages/MenuAppBar";

function MainLayout() {
  return (
    <>
      <MenuAppBar />
      <Outlet />
    </>
  );
}

export default MainLayout;
