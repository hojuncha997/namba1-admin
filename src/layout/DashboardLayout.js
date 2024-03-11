import UpperNav from "../components/upperNav/UpperNav";
import Sidebar from "../components/sidebar/Sidebar";
import MainContainer from "../components/mainContainer/MainContainer";
import { Outlet } from "react-router-dom";

const DashboardLayout = ({ children }) => {
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
