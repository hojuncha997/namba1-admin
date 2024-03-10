import styled from "styled-components"; // 수정: {styled} -> styled

const MainContainerStyle = styled.div`
  margin-top: 50px;
  margin-left: 15%;
  padding-top: 1%;
  padding-left: 1%;
  // left: 20%; position 속성이 정의돼 있지 않으면 적용되지 않음.
  display: flex;
  // background-color: lightgreen;
  justify-content: center;
  align-items: stretch;
  /* 아이템들의 높이를 컨테이너에 맞춤 */
`;

// children으로 받아야 하위 컴포넌트들을 표시해 줄 수 있다.
const MainContainer = ({ children }) => {
  return <MainContainerStyle>{children}</MainContainerStyle>;
};

export default MainContainer;
