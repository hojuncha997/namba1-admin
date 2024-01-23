import styled from "styled-components";
import Login from "../login/Login";

const MainContentStyle = styled.div`
  background: #fff;
  width: 100%;
  /* min-height: 600px; */
  order: 2;
  overflow-y: auto;
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 50px;
  font-size: 30px;
`;

const MainContentWrapper = styled.div`
  // margin: 0;
  display: flex;
  flex-direction: column;
  // background-color: tomato;
  // border: solid 1px black;
`;

const MainContentHeaderStyle = styled.div`
  background-color: tomato;
  margin-bottom: 30px;
`;
const MainContentSectionStyle = styled.section`
  background-color: deepskyblue;
  margin-bottom: 30px;
`;
const MainContentFooterStyle = styled.div`
  background-color: lightgreen;
`;

const MainContent = ({ children }) => {
  return (
    <>
      <MainContentStyle>
        <MainContentWrapper>
          {/* <div>{children}</div> */}
          {/* <Login></Login> */}
          <MainContentHeaderStyle>{children}</MainContentHeaderStyle>
          <MainContentSectionStyle>Section</MainContentSectionStyle>
          <MainContentFooterStyle>footer</MainContentFooterStyle>
        </MainContentWrapper>
      </MainContentStyle>
    </>
  );
};

export default MainContent;
