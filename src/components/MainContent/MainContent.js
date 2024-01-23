import styled from "styled-components";
import Login from "../login/Login";

const MainContentStyle = styled.div`
  background: #fff;
  width: 100%;
  /* min-height: 600px; */
  order: 2;
  overflow-y: auto;
  margin-left: 375px;
  margin-right: 30px;
  margin-top: 50px;
  font-size: 20px;
`;

const MainContentWrapper = styled.div`
  // margin: 0;
  display: flex;
  flex-direction: column;
  // background-color: tomato;
  // border: solid 1px black;
`;

const MainContentHeaderStyle = styled.div`
  height: 100px;
  background-color: tomato;
  margin-bottom: 30px;
`;
const MainContentSectionStyle = styled.section`
  display: flex; // 또는 grid
  flex-direction: column;
  overflow-y: auto; // 내용이 많을 경우 스크롤

  background-color: deepskyblue;
  margin-bottom: 30px;
`;
const MainContentFooterStyle = styled.div`
  background-color: lightgreen;
  // position: fixed;
  height: 30px;
`;

const MainContent = ({ children }) => {
  return (
    <>
      <MainContentStyle>
        <MainContentWrapper>
          {/* <div>{children}</div> */}
          {/* <Login></Login> */}
          <MainContentHeaderStyle>{children}</MainContentHeaderStyle>
          <MainContentSectionStyle>
            <div>Section</div>
            <div>Section</div>
            <div>Section</div>
            <div>Section</div>
            <div>Section</div>
            <div>Section</div>
            <div>Section</div>
            <div>Section</div>
            <div>Section</div>
            <div>Section</div>
            <div>Section</div>
            <div>Section</div>
            <div>Section</div>
            <div>Section</div>
            <div>Section</div>
            <div>Section</div>
            <div>Section</div>
            <div>Section</div>
          </MainContentSectionStyle>
          <MainContentFooterStyle>footer</MainContentFooterStyle>
        </MainContentWrapper>
      </MainContentStyle>
    </>
  );
};

export default MainContent;
