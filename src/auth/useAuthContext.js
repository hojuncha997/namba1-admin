import { useContext } from "react";
//
import { AuthContext } from "./JwtContext";
// import { AuthContext } from './Auth0Context';
// import { AuthContext } from './FirebaseContext';
// import { AuthContext } from './AwsCognitoContext';

// ----------------------------------------------------------------------

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuthContext 컨텍스트는 AuthProvider 내에서 사용되어야 한다."
    );
  }
};

// export const useAuthContext = () => {
//   const context = useContext(AuthContext);

//   if (!context)
//     throw new Error("useAuthContext context must be use inside AuthProvider");

//   return context;
// };

/*



커스텀 훅을 사용하는 이유:

코드의 재사용성과 간결성: useContext(AuthContext)를 직접 사용하는 대신, 이를 감싸는 커스텀 훅(useAuthContext)을 만들면, 
  이 컨텍스트를 사용하는 로직을 여러 컴포넌트에서 쉽게 재사용할 수 있다. 이렇게 함으로써, 컨텍스트 사용에 대한 코드 중복을 줄이고,
  코드베이스를 더 깔끔하게 유지할 수 있다.

에러 핸들링: useAuthContext 훅 내에서 context가 없는 경우 에러를 던지는 로직을 추가함으로써, 
  이 훅이 AuthProvider 컴포넌트의 하위에서만 사용되도록 강제할 수 있습니다. 이는 컨텍스트 사용에 대한 실수를 줄이고, 디버깅을 용이하게 한다.

컨텍스트 교체의 용이성: 다른 인증 방식(예: Auth0, Firebase, AWS Cognito 등)으로 쉽게 전환할 수 있다.
  각 인증 방식에 대해 별도의 컨텍스트를 만들고, useAuthContext 훅을 통해 현재 애플리케이션에서 사용할 인증 컨텍스트를 쉽게 교체할 수 있다.
  이는 애플리케이션의 인증 방식을 변경하거나 업데이트할 때 유연성을 제공한다.


---------

useContext를 사용하는 이유:
useContext 훅은 React 컨텍스트를 함수 컴포넌트 내에서 사용할 수 있게 해주며, 컨텍스트의 현재 값을 반환한다. 이 훅을 사용하는 주된 이유 아래와 같다.

렌더링 최적화: useContext를 사용하면, 해당 컨텍스트의 값이 변경될 때만 컴포넌트가 재렌더링되도록 React가 자동으로 최적화해준다. 
  이는 특히 컨텍스트 값이 자주 변경되는 경우 불필요한 렌더링을 방지하고 성능을 향상시키는 데 도움이 된다.

컨텍스트 사용의 간결성: useContext를 사용하면, 클래스 컴포넌트에서 Consumer 컴포넌트를 사용하는 것보다 훨씬 간결하게 컨텍스트 값을 사용할 수 있다.

결론적으로, 커스텀 훅을 사용하여 컨텍스트를 관리하는 방식은 코드의 재사용성과 유지 보수성을 높이며, 컨텍스트 사용을 더 안전하고 효율적으로 만든다.다.

*/
