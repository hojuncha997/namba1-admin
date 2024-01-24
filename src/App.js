// 전역 스타일
import "./App.css";

import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

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

  const MENU_HEAD2 = [
    {
      main_title: "등록메인1",
      sub_categories: [
        {
          name: "팝니다 등록",
          menu_names: ["개인 소형", "개인 대형", "법인임대", "주선면허"],
        },
        {
          name: "삽니다 등록",
          menu_names: ["개인 소형", "개인 대형", "법인 임대", "주선면허"],
        },
      ],
    },
    {
      main_title: "등록메인2",
      sub_categories: [
        {
          name: "팝니다 등록",
          menu_names: ["개인 소형", "개인 대형", "법인임대", "주선면허"],
        },
        {
          name: "삽니다 등록",
          menu_names: ["개인 소형", "개인 대형", "법인 임대", "주선면허"],
        },
      ],
    },
  ];

  return (
    <>
      <GlobalStyle />
      <div className="App">
        <UpperNav title={"UpperNav"}></UpperNav>

        <MainContainer>
          {/* <MainContent>플랫폼 관리</MainContent> */}

          <Sidebar menus={"menus 안녕하세요!"}></Sidebar>
          <PersonalCompact></PersonalCompact>
        </MainContainer>

        {/* <Login></Login> */}
      </div>
    </>
  );
}

export default App;

/*
네이게이션 바에서 메뉴를 클릭하면,


*/
