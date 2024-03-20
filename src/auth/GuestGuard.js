import { PropTypes } from "prop-types";
import { Navigate } from "react-router-dom";
import { PATH_DASHBOARD } from "../routes/paths";
// import LoadingScreen from '../components/loading-screen';

import { useAuthContext } from "./useAuthContext";

GuestGuard.propTypes = {
  children: PropTypes.node,
};

export default function GuestGuard({ children }) {
  const { isAuthenticated, isInitialized } = useAuthContext();

  //   인증에 성공했다면 대시보드 페이지로 이동
  if (isAuthenticated) {
    return <Navigate to={PATH_DASHBOARD.root} />;
  }

  //   초기화가 false라면
  if (!isInitialized) {
    // return <LoadingScreen/>
    return <>로딩 중...</>;
  }

  return <>{children}</>;
  //   여기엔 로그인 페이지가 자식으로 들어감
}
