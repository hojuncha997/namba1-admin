import { useState } from "react";

import PropTypes from "prop-types";
import { useAuthContext } from "./useAuthContext";
import { useLocation, Navigate } from "react-router-dom";
import Login from "../sections/auth/Login";

AuthGuard.propTypes = {
  children: PropTypes.node,
};

export default function AuthGuard({ children }) {
  const { isAuthenticated, isInitialized, user } = useAuthContext();

  const { pathname } = useLocation();

  const [requestedLocation, setRequestedLocation] = useState(null);

  // 초기화가 false라면. 예를 들어, 애플리케이션 시작 시 백엔드 서버로부터 사용자의 인증 상태를 확인하는 경우, 사용자에게 로딩 상태를 표시할 수 있다.
  if (!isInitialized) {
    return <>로딩 중...</>;
  }

  /*
     사용자가 인증되지 않은 상태에서 보호된 페이지에 접근하려고 할 때, 해당 페이지의 경로는 requestedLocation 상태에 저장된다.
     사용자가 로그인에 성공한 후, 이전에 요청했던 페이지로 리다이렉션할 수 있도록 이 경로를 사용한다.
     이 로직은 사용자가 로그인 후 원래 의도했던 페이지로 바로 이동할 수 있게 한다.
  */

  if (!isAuthenticated) {
    if (pathname !== requestedLocation) {
      /* 
        1. 사용자 요청 경로가 기존의 로케이션과 다를 때, 일단 사용자 요청 경로를 저장해두고 로그인 페이지를 반환한다.
        이 때 사용자에게 로그인 화면이 제공되지만, 사용자가 처음 요청한 URL은 변경되지 않는다.
        이는 사용자가 로그인 후 원래 의도했던 대로 해당 경로로 리다이렉션될 수 있게 하기 위함이다
      .*/

      setRequestedLocation(pathname);
    }

    return <Login />;
  }

  /*
    로그인 이전 요청을 저장해 두었던 경로가 requestedLocation에 담겨 있다. 이것이 존재하고(null이 아니고), 이것이 pathname과 다르다면
    requestedLocation으로 리다이렉트 한 뒤에, 즉 사용자가 처음에 요청했던 경로로 사용자를 이동시키고 requestedLocation를 null로 만든다.
  */
  if (requestedLocation && pathname !== requestedLocation) {
    setRequestedLocation(null);
    // setRequestedLocation(null)은 비동기 호출이다. 따라서 아래 코드가 먼저 실행된다.
    return <Navigate to={requestedLocation} />;
  }

  /*
    만약 기존의 requestedLocation가 존재하지 않는다면 <AuthGuard>가 감싸고 있는 children이 반환된다.
    src/routes/index.js에서 <AuthGuard><DashboardLayout /></AuthGuard> 이렇게 설정했으므로 <DashboardLayout />가 반환된다.
  */

  return <>{children}</>;
}

/**
 
pathname !== requestedLocation 검사는 몇 가지 중요한 목적을 가지고 있다. 
 
중복 리다이렉션 방지:
 사용자가 이미 requestedLocation으로 리다이렉션되어 로그인 페이지에 도달한 상태에서, 같은 페이지로의 또 다른 리다이렉션을 방지한다.
 예를 들어, 사용자가 보호된 페이지 /secret-page로 이동하려고 하면, requestedLocation은 /secret-page로 설정된다. 
 이후, 사용자가 로그인 페이지로 리다이렉트되는데, 이때 pathname과 requestedLocation이 동일한 경우가 될 수 있다. 
 이 조건을 검사하지 않으면, 사용자가 이미 로그인 페이지에 있음에도 불구하고, 불필요하게 같은 위치로의 리다이렉션을 시도할 수 있다.

정확한 리다이렉션 위치 설정:
 사용자가 로그인 페이지로 리다이렉트되기 전에, 정확한 requestedLocation을 설정하여, 사용자가 로그인 성공 후 올바른 페이지로 리다이렉션될 수 있도록 한다.
 만약 사용자가 보호된 페이지로의 접근을 시도했을 때 이미 requestedLocation에 다른 경로가 설정되어 있다면,
 이 검사를 통해 사용자가 실제로 접근하려고 했던 최신의 경로를 requestedLocation으로 갱신한다.
 이는 사용자가 여러 보호된 페이지를 차례로 접근하려고 할 때 올바른 리다이렉션 동작을 보장하는데 중요하다.

상태 관리의 명확성:
 pathname !== requestedLocation 검사를 사용함으로써, requestedLocation 상태가 언제 어떻게 업데이트되어야 하는지 명확하게 정의할 수 있다.
 이는 코드의 가독성을 높이고, 의도하지 않은 상태 변화로 인한 버그를 방지하는데 도움이 된다.

 요약하자면, 이 조건문은 애플리케이션의 리다이렉션 로직을 보다 정확하고 효율적으로 관리하기 위해 필요하다.
 사용자가 로그인 과정을 거쳐 최종적으로 원하는 페이지에 도달할 수 있도록, 리다이렉션 과정에서 발생할 수 있는 잠재적인 문제들을 미리 방지하는 역할을 한다.
 
 */
