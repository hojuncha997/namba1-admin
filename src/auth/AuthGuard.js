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

/*




 pathname과 requestedLocation이 다른지 확인하는 이유는 사용자가 원하는 최종 목적지로 정확하게 리다이렉션하기 위함입니다. 만약 이 조건을 확인하지 않고 if (requestedLocation)만 사용한다면, 사용자가 로그인 페이지로 리다이렉트되는 과정에서 requestedLocation이 불필요하게 여러 번 업데이트될 수 있으며, 이는 예상치 못한 동작을 초래할 수 있습니다. 따라서, 이러한 조건 검사는 더 안정적이고 예측 가능한 사용자 경험을 제공하기 위한 중요한 부분입니다.

 불필요하게 여러 번 업데이트된다는 것은 사용자의 실제 의도와 무관하게 requestedLocation 상태가 여러 번 바뀌는 상황을 의미합니다. 이러한 상황은 특히 싱글 페이지 어플리케이션(SPA)에서 라우팅과 상태 관리가 복잡하게 얽혀 있을 때 발생할 수 있습니다.

예시 상황
사용자가 로그인하지 않은 상태에서 보호된 페이지 /dashboard로 이동을 시도합니다.
시스템은 사용자를 로그인 페이지 /login으로 리다이렉트합니다. 이 때, requestedLocation 상태를 /dashboard로 설정합니다.
로그인 페이지가 로딩되는 동안, 사용자가 브라우저의 뒤로가기 버튼을 클릭하여 메인 페이지 /로 돌아갑니다.
사용자가 다시 /about 페이지로 이동을 시도합니다. 이 때, requestedLocation이 다시 /about으로 업데이트됩니다.
최종적으로 사용자가 로그인에 성공하면, /about 페이지로 리다이렉트됩니다.
문제점
상태 업데이트의 빈번함: 사용자가 로그인 과정을 완료하기 전에 여러 페이지를 방문하는 경우, requestedLocation 상태가 사용자의 마지막 의도와는 무관하게 여러 번 업데이트됩니다.
리다이렉트 정확도 저하: 사용자가 실제로 방문하고자 했던 페이지(/dashboard) 대신 마지막에 시도했던 페이지(/about)로 리다이렉트될 수 있습니다. 이는 사용자 경험에 혼란을 줄 수 있습니다.
해결 방안
pathname과 requestedLocation이 다른 경우에만 requestedLocation을 업데이트하도록 조건을 설정합니다. 이렇게 하면 사용자가 불필요하게 여러 페이지를 거치더라도, 처음 의도한 대로 보호된 페이지로 정확하게 리다이렉트할 수 있습니다.
상태 업데이트가 사용자의 실제 의도를 반영하도록, 로그인 페이지로의 리다이렉트 전에만 requestedLocation을 설정합니다.
이렇게 조건을 설정함으로써, 사용자의 의도에 더 정확하게 부합하는 리다이렉션 로직을 구현하고, 상태 관리의 복잡성과 불필요한 업데이트를 줄일 수 있습니다.

/about 페이지로의 마지막 이동이 사용자의 최종 의도를 반영하는 경우도 있지만, 그렇지 않을 수도 있습니다. 문제는 사용자가 보호된 페이지에 접근하려 했던 원래 의도와 그 과정에서 발생하는 다양한 상호작용 사이의 일관성을 유지하는 것입니다.

사용자 의도의 복잡성
직접적인 의도: 사용자가 /dashboard 같은 보호된 페이지로 직접 이동하려 했을 때, 이는 명확한 의도를 나타냅니다. 사용자는 특정 작업을 수행하고자 해당 페이지를 방문하려 했습니다.
간접적인 의도: 로그인 과정 중 또는 그 이전에 사용자가 /about 같은 공개 페이지로 이동을 시도하는 것은, 사용자가 본래 수행하려 했던 작업과는 다를 수 있습니다. 이는 사용자가 단순히 시스템의 반응을 테스트하거나, 로그인 과정에서 잠시 다른 정보를 확인하고자 하는 등의 이유일 수 있습니다.
문제점 및 고려사항
원래 의도로의 복귀: 사용자가 로그인 과정을 시작한 원래의 페이지(/dashboard)로 돌아가길 원할 수 있습니다. 특히, 보호된 페이지에 대한 접근 시도가 사용자의 주된 목적이었다면, 로그인 후 해당 페이지로 자동 리다이렉션되는 것이 사용자 경험 측면에서 바람직할 수 있습니다.
경로 변경의 명확성: 사용자가 로그인 페이지로 리다이렉트된 후 다른 페이지(/about)로 이동하는 경우, 이는 사용자가 본래 의도했던 작업에서 잠시 벗어난 것일 수 있습니다. 이런 상황에서는 사용자가 처음에 시도했던 보호된 페이지로 리다이렉트하는 것이 사용자의 작업 흐름을 원활하게 이어갈 수 있는 방법입니다.
결론
결국, /about으로의 이동이 사용자의 최종 의도인지 아닌지는 사용자의 상황과 맥락에 따라 달라집니다. 이러한 상황을 처리하기 위해, 웹 애플리케이션은 사용자가 로그인 프로세스를 시작할 때의 의도(예: 보호된 페이지에 대한 접근 시도)와 로그인 후의 상호작용(예: 다른 페이지로의 이동)을 모두 고려할 수 있는 유연한 리다이렉션 로직을 구현할 필요가 있습니다. 이는 사용자가 원활하게 작업을 계속할 수 있도록 지원하면서도, 사용자의 변경된 의도를 존중하는 방식으로 설계되어야 합니다.

*/
