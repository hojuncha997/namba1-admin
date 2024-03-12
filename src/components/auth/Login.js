import styled from "styled-components";
import logoImage from "../../assets/images/namba-logo-100.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

const CredentialStyle = styled.div`
  display: flex;
  flex-direction: column; /* inputField를 세로 방향으로 정렬 */
`;

const InputFieldStyle = styled.div`
  margin-bottom: 10px; /* 각 inputField 간에 여백 추가 */
`;

const LogoStyle = styled.div``;

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleId = (event) => {
    console.log(event.target.value);
    setId(event.target.value);
  };

  const handlePassword = (event) => {
    console.log(event.target.value);
    setPassword(event.target.value);
  };

  const handleLoginButton = () => {
    if (id === "hjcha" && password === "1111") {
      alert("로그인 성공");
      navigate("/dashboard");
    } else {
      alert("로그인 정보가 맞지 않습니다.");
      return;
    }
  };

  return (
    <LoginContainerStyle>
      <LogoStyle>
        <img src={logoImage}></img>
      </LogoStyle>
      <CredentialStyle>
        <InputFieldStyle>
          <label>
            아이디
            <input type="text" onChange={(event) => handleId(event)}></input>
          </label>
        </InputFieldStyle>
        <InputFieldStyle>
          <label>
            비밀번호
            <input
              type="password"
              onChange={(event) => handlePassword(event)}
            ></input>
          </label>
        </InputFieldStyle>

        <div>
          <button onClick={handleLoginButton}>로그인</button>
        </div>
      </CredentialStyle>
    </LoginContainerStyle>
  );
};

export default Login;
