import styled from "styled-components";

const CenterWrapper = styled.div`
  margin: auto;
  min-width: 30 %;
  max-width: 40%;
  border: 3px solid black;
  border-radius: 20px;
  z-index: 999;
  overflow: auto;
`;

const FlexDiv = styled.div`
  display: flex;
  height: 400px;
  justify-content: center;
  align-items: center;
  background-color: pink;
`;

const PreStyle = styled.pre`
  background-color: #333; /* 배경색 */
  color: #fff; /* 글꼴 색상 */
  padding: 10px; /* 내부 여백 */
  border-radius: 5px; /* 테두리 둥근 모서리 */
  overflow-x: auto; /* 가로 스크롤바 필요 시 나타남 */
  max-width: 50%;
`;

const CodeStyle = styled.code`
  font-family: "Courier New", Courier, monospace; /* 고정폭 글꼴 */
`;

const PostBody = styled.div`
  background-color: lightgreen;
  height: 400px;
`;

const Register = ({ children }) => {
  return (
    <>
      회원가입폼
      <h1>sddsfsdfds</h1>
      <CenterWrapper>
        <FlexDiv>
          <PreStyle>
            <CodeStyle>JS코드는 여기에</CodeStyle>
          </PreStyle>
        </FlexDiv>
        <PostBody>dsf</PostBody>
        <PostBody style={{ backgroundColor: "deepskyblue" }}>dsf</PostBody>
      </CenterWrapper>
    </>
  );
};

export default Register;
