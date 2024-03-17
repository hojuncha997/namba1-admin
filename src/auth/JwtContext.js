import PropTypes from "prop-types";
import { axios } from "../utils/axios";
import localStorageAvailable from "../utils/localStorageAvailable";

import { isValidToken, setSession } from "./utils";
import {
  createContext,
  useCallback,
  useEffect,
  useReducer,
  useMemo,
} from "react";

// 초기 상태값: useReducer 함수의 두 번째 파라미터로 제공된다. 첫 번째 파라미터인 리듀서 함수의
const initialState = {
  isInitialized: false,
  isAuthenticated: false,
  user: null,
};

/* 
리듀서로 사용할 함수:
useReducer의 첫 번째 파라미터로 입력되며, dispatch(action)함수에 의해 전달된 값이 useReducer를 통해 이 reducer로 전달된다.

리듀서 함수: 이 함수는 애플리케이션의 상태와 액션을 인자로 받아, 액션 타입에 따라 상태를 어떻게 변경할지 결정한다. 
리듀서는 순수 함수여야 하며, 같은 입력에 대해서는 언제나 동일한 출력을 반환해야 한다.

액션: 상태를 어떻게 변경할지 설명하는 객체로, 보통 type 필드를 필수로 가진다. 필요에 따라 추가적인 정보를 payload 등의 필드에 담을 수 있다.
dispatch 함수: 리듀서에 액션을 전달하는 함수이다. dispatch를 호출할 때마다 리듀서 함수가 실행되어 새로운 상태가 계산되고, 
  이 새로운 상태로 컴포넌트가 업데이트 된다.

useReducer는 특히 상태 업데이트 로직이 복잡하거나 여러 하위 값으로 이루어진 상태를 관리할 때, 
또는 상태 업데이트가 이전 상태에 의존적일 때 유용하다. useReducer를 사용함으로써 상태 업데이트 로직을 컴포넌트 밖으로 분리할 수 있어,
코드를 더 명확하고 관리하기 쉽게 만들 수 있으며, 상태 관리 로직을 재사용하고 테스트하기 더 용이해진다.


# 반드시 첫 번째 매개변수로 현재 상태(state)를 받고, 두 번째 매개변수로 액션(action)을 받아야 한다
# switch로 해도 된다.
# 상태 변화가 무거운 작업이 아니기 때문에 동기적으로 이루어진다. 무거운 작업은 바깥에서 먼저 비동기로 수행한고 여기에 전달한다.

*/
const reducer = (state, action) => {
  if (action.type === "INITIAL") {
    return {
      isInitialized: true,
      isAuthenticated: action.payload.isAuthenticated,
      user: action.payload.user,
    };
  }

  if (action.type === "LOGIN") {
    return {
      ...state,
      // ...state 값 내부에 가지고 있는 필드와 동일한 필드가 새로 추가됐다면 오버라이드 한다.
      isAuthenticated: true,
      user: action.payload.user,
    };
  }

  if (action.type === "REGISTER") {
    return {
      ...state,
      isAuthenticated: true,
      user: action.payload.user,
    };
  }

  if (action.type === "LOGOUT") {
    return {
      ...state,
      isAuthenticated: false,
      user: null,
    };
  }

  return state;
};

/**
 컨텍스트 생성:

 AuthContext를 생성할 때 React.createContext() 함수를 사용했다.
  이 함수는 Provider와 Consumer 컴포넌트를 포함한 객체를 반환한다.
  Provider 컴포넌트는 이 컨텍스트로 제공된 값을 하위 컴포넌트에게 전달하는 역할을 한다.

  memoizedValue는 컨텍스트를 구독하는 모든 컴포넌트에 제공될 데이터이다.
  따라서, <AuthContext.Provider value={memoizedValue}>는 AuthContext를 사용하여 생성된 Provider 컴포넌트를 의미하며,
   이를 통해 memoizedValue에 담긴 값들을 애플리케이션의 다른 부분에서 사용할 수 있도록 한다.

   AuthContext.Provider의 속성을 통해 value를 넣어줘야만 하위 컴포넌트들과 동적으로 값을 공유할 수 있다.
 */

// ----------------------------------------------------------------------

export const AuthContext = createContext(null);

// ----------------------------------------------------------------------

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export function AuthProvider({ children }) {
  // export const AuthProvider = ({ children }) => {
  // Cannot access 'AuthProvider' before initialization 에러가 발생.

  /**
  함수 선언 VS. 함수 표현
  export function AuthProvider({ children }) { ... } 형태로 함수를 선언하면, 
  JavaScript 엔진은 이 함수 선언을 호이스팅하여 스크립트 실행 전에 메모리에 할당한다. 이로 인해,
  모듈을 로딩하는 동안 AuthProvider가 초기화되고, 다른 모듈이나 컴포넌트에서 이를 임포트할 때 이미 초기화된 상태가 된다.

  화살표 함수의 한계: 
  반면, export const AuthProvider = ({ children }) => { ... }와 같은 화살표 함수 표현식은 변수에 할당되는 형태이므로,
  해당 변수 선언이 코드 흐름에서 처리될 때까지 함수가 초기화되지 않는다. 만약 다른 모듈이 이 함수를 임포트하고, 
  임포트하는 모듈이 화살표 함수가 할당되기 전에 실행되려고 한다면, 
  "Cannot access 'AuthProvider' before initialization"와 같은 초기화 문제가 발생할 수 있다.
  
 */

  /**
   * !!!!!!!
   * 여기서 생성한 컨텍스트 값(전역 상태값)을 전역에서 사용하기 위해 App.js를,
   * 또는 App.js가 리턴하는 컴포넌트들을 <AuthProvider>로 감싸줄 필요가 있다.
   *
   */

  // useReducer 사용: 앞서 생성한 리듀서 함수와, 초기값을 파라미터로 넣어준다.
  // dispatch는 액션 객체를 인자로 받아 해당 액션에 정의된 타입에 따라 상태를 어떻게 변경할지 결정하는 로직(리듀서 함수)을 실행한다.
  const [state, dispatch] = useReducer(reducer, initialState);

  //  localStorate 사용 여부에 따라 true 또는 false값을 반환한다.
  const storageAvailable = localStorageAvailable();

  const initialize = useCallback(async () => {
    /*
    이 initialize 함수의 주 목적은 브라우저의 로컬 스토리지에 저장된 토큰을 사용하여
    사용자가 이미 로그인했는지 여부를 자동으로 확인하고, 해당 사용자가 로그인한 상태를 유지할 수 있도록 하는 것이다.
    이 과정을 통해, 사용자가 웹 애플리케이션을 재방문하거나 페이지를 새로고침할 때 마다, 로그인 상태를 유지할 수 있다.
    */

    try {
      // 로컬 스토리지 사용이 가능한 경우 토큰값을 가져오고 없으면 빈문자열로 설정
      const accessToken = storageAvailable
        ? localStorage.getItem("accessToken")
        : "";

      // * 토큰값이 존재하고 그 값이 유효한 경우
      if (accessToken && isValidToken(accessToken)) {
        // 세션에 등록: 요청 헤더에 토큰을 넣고, 타이머에 넣음
        setSession(accessToken);

        // 유효한 토큰이 기존에 존재하기 때문에 토큰값을 제외한 다른 정보가 불필요하다.
        // 토큰값이 헤더에 포함된 요청이 API로 전송되고 응답 가운에 user 정보를 구조분해할당함.
        const response = await axios.get("/api/account/my-account");
        const { user } = response.data;

        // 리듀서 함수에 초기화 하라고 알려주기
        dispatch({
          type: "INITIAL",
          payload: {
            isAuthenticated: true,
            user,
          },
        });
      } else {
        // * 토큰이 없거나 유효하지 않은 경우
        dispatch({
          type: "INITIAL",
          payload: {
            isAuthenticated: false,
            user: null,
          },
        });
      }
    } catch (error) {
      // 에러가 발생한 경우
      // console.error를 쓰면 붉은색으로 표시되며 브라우저나 node.js에 스택트레이스 제공 가능
      console.error(error);
      dispatch({
        type: "INITIAL",
        payload: {
          isAuthenticated: false,
          user: null,
        },
      });
    }
  }, [storageAvailable]);

  useEffect(() => {
    initialize();
  }, [initialize]);

  // LOGIN
  // const login = useCallback(async (email, password) => {
  // const response = await axios.post("/api/account/login", {
  const login = useCallback(async (id, password) => {
    const data = { user_id: id, passwd: password };
    // const response = await axios.post("/auth/login", {
    //   email,
    //   password,
    // });

    const response = await axios.post("/auth/login", data);
    console.log(response);

    // const { accessToken, user } = response.data;
    const { access_token, user } = response.data;

    // setSession(accessToken);
    setSession(access_token);

    dispatch({
      type: "LOGIN",
      payload: {
        user,
      },
    });

    // 호출한 곳으로 값 반환
    return response;
  }, []);

  // REGISTER
  const register = useCallback(async (email, password, firstName, lastName) => {
    const response = await axios.post("/api/account/register", {
      email,
      password,
      firstName,
      lastName,
    });

    const { accessToken, user } = response.data;
    localStorage.setItem("accessToken", accessToken);

    dispatch({
      type: "REGISTER",
      payload: {
        user,
      },
    });
  }, []);

  // LOGOUT
  const logout = useCallback(() => {
    setSession(null);
    dispatch({
      type: "LOGOUT",
    });
  }, []);

  /*
    useMemo 훅은 계산된 값을 메모이제이션(캐싱)하여, 의존성 배열에 명시된 값들이 변경될 때만 함수를 재계산하도록 한다.
  */
  const memoizedValue = useMemo(
    () => ({
      isInitialized: state.isInitialized,
      isAuthenticated: state.isAuthenticated,
      user: state.user,
      method: "jwt",
      login,
      register,
      logout,
    }),
    [
      state.isAuthenticated,
      state.isInitialized,
      state.user,
      login,
      logout,
      register,
    ]
  );

  return (
    <AuthContext.Provider value={memoizedValue}>
      {children}
    </AuthContext.Provider>
  );
}
