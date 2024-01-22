import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {
    --main-color: #FFDD00;
    --color-dark: #1D2231;
    --text-grey: #8390A2;
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

}
`;

export default GlobalStyle;
