import UpperNav from "../components/upperNav/UpperNav";
import Sidebar from "../components/sidebar/Sidebar";
import MainContainer from "../components/mainContainer/MainContainer";
import { Outlet } from "react-router-dom";
import { useAuthContext } from "../auth/useAuthContext";

const DashboardLayout = ({ children }) => {
  const { isAuthenticated, isInitialized, user } = useAuthContext();
  console.log("isAuthenticated: ", isAuthenticated);
  console.log("isInitialized: ", isInitialized);
  console.log("user: ", user);

  return (
    <>
      <UpperNav></UpperNav>
      <Sidebar></Sidebar>
      <MainContainer>
        <Outlet />
      </MainContainer>
    </>
  );
};

export default DashboardLayout;
