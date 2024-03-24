import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {
    --main-color: #FFDD00;
    --color-dark: #1D2231;
    --text-grey: #8390A2;
    --namba1-yellow: #FFDD00;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  list-style-type: none;
  text-decoration: none;
  // font-family: 'Poppins', sans-serif;
  // font-family: 'Noto+Sans+KR', sans-serif;
  font-family: 'Noto Sans KR', sans-serif; /* Google Fonts의 폰트를 여기서 지정 */

  border-collapse: collapse;

  a {
    color: inherit; // 부모 요소의 색상을 상속받음
    text-decoration: none; // 밑줄 제거

    &:active, &:focus {
      color: inherit; // 호버, 액티브, 포커스 상태에서도 색상 유지
      text-decoration: none; //액티브, 포커스 상태에서도 밑줄 제거
    }

    &:hover {
      color: red;
    }
  }





  /* 텍스트, 숫자, 비밀번호 입력 필드에 공통 스타일 적용 */
  input[type="text"],
  input[type="number"],
  input[type="password"] {
    background-color: var(--text-grey); /* 배경색 */
    color: var(--color-dark); /* 글자색 */
    padding: 10px; /* 내부 여백 */
    margin-bottom: 15px; /* 요소 하단 여백 */
    border: 1px solid var(--main-color); /* 테두리 */
    border-radius: 5px; /* 테두리 둥글기 */
  
    /* 추가적인 스타일링 */
    &:focus {
      border-color: var(--namba1-yellow); /* 포커스 상태에서 테두리 색상 변경 */
      outline: none; /* 기본 아웃라인 제거 */
    }
  }

}
`;

export default GlobalStyle;
