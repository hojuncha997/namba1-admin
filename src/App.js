// 전역 스타일
import "./App.css";

import { Routes, Route, useNavigate, Outlet } from "react-router-dom";

// userRoutes를 사용한 커스텀 설정 라우터
import Router from "./routes";

import logoImage from "./assets/images/namba-logo-100.png";
import GlobalStyle from "./components/global/GlobalStyle";
import UpperNav from "./components/upperNav/UpperNav";
import MainContainer from "./components/mainContainer/MainContainer";
import MainContent from "./components/MainContent/MainContent";
import Sidebar from "./components/sidebar/Sidebar";
import Login from "./components/login/Login";
import PersonalCompact from "./components/userMgmt/personalCompact/PersnoalCompact";

function App() {
  const navigate = useNavigate();

  return (
    <>
      <GlobalStyle />
      <div className="App">
        <UpperNav title={"UpperNav"}></UpperNav>
        <Sidebar menus={"menus 안녕하세요!"}></Sidebar>

        <MainContainer>
          {/* <TestMain /> */}
          <Router />
        </MainContainer>

        {/* <Login></Login> */}
      </div>
    </>
  );
}

export default App;
