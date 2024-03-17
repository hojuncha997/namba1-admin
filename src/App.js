// 전역 스타일
import "./App.css";
// userRoutes를 사용한 커스텀 설정 라우터

import { AuthProvider } from "./auth/JwtContext";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./components/global/GlobalStyle";
import Router from "./routes";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Router />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
