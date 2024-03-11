import styled from "styled-components";
import logoImage from "../../assets/images/namba-logo-100.png";

const LoginContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

  width: 500px;
  height: 300px;
  /* background-color: var(--namba1-yellow); */
  background-color: var(#fff);
  margin-top: 30vh;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
  border: 1px solid grey;
  padding: 30px;
`;

const credentialStyle = styled.div`
  display: flex;
  flex-direction: column; /* inputField를 세로 방향으로 정렬 */
`;

const inputFieldStyle = styled.div`
  margin-bottom: 10px; /* 각 inputField 간에 여백 추가 */
`;

const LogoStyle = styled.div``;

const Login = () => {
  return (
    <LoginContainerStyle>
      <LogoStyle>
        <img src={logoImage}></img>
      </LogoStyle>
      <credentialStyle>
        <inputFieldStyle>
          <label>
            아이디
            <input type="text"></input>
          </label>
        </inputFieldStyle>
        <inputFieldStyle>
          <label>
            비밀번호
            <input type="password"></input>
          </label>
        </inputFieldStyle>

        <div>
          <button>로그인</button>
        </div>
      </credentialStyle>
    </LoginContainerStyle>
  );
};

export default Login;
