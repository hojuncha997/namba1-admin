import styled from "styled-components";

const MainContentStyle = styled.div`
  background: #fff;
  width: 100%;
  /* min-height: 600px; */
  order: 2;
  overflow-y: auto;
  margin-left: 50px;
  margin-top: 50px;
  font-size: 30px;
`;

const MainContent = ({ children }) => {
  return (
    <>
      <MainContentStyle>
        <div>{children}</div>
      </MainContentStyle>
    </>
  );
};

export default MainContent;
