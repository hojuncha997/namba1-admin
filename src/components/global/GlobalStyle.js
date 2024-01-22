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

}
`;

export default GlobalStyle;
