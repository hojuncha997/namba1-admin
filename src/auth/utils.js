// // routes
import { PATH_AUTH } from "../routes/paths";
// // utils
import axios from "../utils/axios";

// // ----------------------------------------------------------------------

/* jwtDecode 함수는 주어진 JWT를 디코드하여 페이로드를 추출.
 이는 토큰에 담긴 정보(예: 사용자 ID, 권한, 만료 시간 등)에 접근하는 데 사용 */
const jwtDecode = (token) => {
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  const jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split("")
      .map((c) => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
      .join("")
  );
  return JSON.parse(jsonPayload);
};

/* isValidToken 함수는 토큰의 만료 시간을 확인하여 현재 시간과 비교,
 토큰의 유효 여부를 판단 */
export const isValidToken = (accessToken) => {
  if (!accessToken) {
    return false;
  }
  const decoded = jwtDecode(accessToken);
  const currentTime = Date.now() / 1000;

  //   ture 또는 false를 반환
  return decoded.exp > currentTime;
};

/* JWT(JavaScript Web Token)의 만료 시간을 기반으로 한 타이머를 설정하고,
 토큰이 만료되었을 때 사용자에게 알림을 주고 자동으로 로그아웃 처리를 수행하는 기능을 담당 */
export const tokenExpired = (exp) => {
  let expiredTimer;
  const currentTime = Date.now();

  //   여기서 exp는 초단위기 때문에 밀리초로 변환하기 위해 1000을 곱한다
  const timeLeft = exp * 1000 - currentTime;

  clearTimeout(expiredTimer);

  // 만료됐을 때 실행
  expiredTimer = setTimeout(() => {
    alert("Token expired");

    localStorage.removeItem("accessToken");
    window.location.href = PATH_AUTH.login;
  }, timeLeft);
};

/* setSession 함수는 사용자가 로그인한 후 토큰을 로컬 스토리지에 저장,
   Axios HTTP 클라이언트의 기본 인증 헤더에 해당 토큰을 추가하여,
   이후의 모든 HTTP 요청에 인증 정보를 포함 */
export const setSession = (accessToken) => {
  if (accessToken) {
    // 토큰 넣기
    localStorage.setItem("accessToken", accessToken);

    // 이미 생성된 Axios 인스턴스의 기본 설정에 인증 토큰을 추가
    // Axios를 사용하여 서버로 보내는 모든 요청에 자동으로 Authorization 헤더 추가
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

    // 토큰 만료 카운터에 토큰 집어넣기
    const { exp } = jwtDecode(accessToken);
    tokenExpired(exp);
  } else {
    localStorage.removeItem("accessToken");
    // delete 연산자는 JavaScript에서 객체의 속성을 제거하는 데 사용되는 기본 제공 연산자이다.
    delete axios.defaults.headers.common.Authorization;
  }
};
