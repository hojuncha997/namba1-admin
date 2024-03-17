// 전역 스타일
import "./App.css";
// userRoutes를 사용한 커스텀 설정 라우터
import { AuthProvider } from "./auth/JwtContext";
import Router from "./routes";
import GlobalStyle from "./components/global/GlobalStyle";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <GlobalStyle />
        <div className="App">
          <Router />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
