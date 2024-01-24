import styled from "styled-components";

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
  // text-align: center;  // background-color: tomato;
  // border: solid 1px black;
`;

const MainContentHeaderStyle = styled.div`
  height: 50px;
  // background-color: tomato;
  margin-bottom: 30px;
  border-bottom: 2px solid black;
  display: flex; // 세로축 중앙 정렬을 위해 사용
  align-items: center; // 세로축 중앙 정렬
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

const PersonalCompact = ({ children }) => {
  return (
    <>
      <MainContentStyle>
        <MainContentWrapper>
          {/* <MainContentHeaderStyle>{children}</MainContentHeaderStyle> */}
          <MainContentHeaderStyle>개인 소형</MainContentHeaderStyle>
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

export default PersonalCompact;
