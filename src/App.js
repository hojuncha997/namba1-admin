// 전역 스타일
import "./App.css";
import GlobalStyle from "./components/global/GlobalStyle";
import UpperNav from "./components/upperNav/UpperNav";
import MainContainer from "./components/mainContainer/MainContainer";
import MainContent from "./components/MainContent/MainContent";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <UpperNav title={"UpperNav"}></UpperNav>

        <MainContainer>
          <MainContent>MainContent</MainContent>
          <Sidebar menus={"menus 안녕하세요!"}></Sidebar>
        </MainContainer>
      </div>
    </>
  );
}

export default App;
