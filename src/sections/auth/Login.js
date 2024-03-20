import styled from "styled-components";
import logoImage from "../../assets/images/namba-logo-100.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../auth/useAuthContext";

const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; /* 세로 중앙 정렬 */
  align-items: center; /* 가로 중앙 정렬 */
  height: 100vh; /* 전체 화면 높이 */
`;

const LoginContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

  width: 30%;
  height: 20%;

  max-width: 20%;
  min-width: 250px;

  /* background-color: var(--namba1-yellow); */
  background-color: var(#fff);
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

const ButtonWrapper = styled.button`
  width: 100%;
`;

const LogoStyle = styled.div`
  width: 100%; /* 또는 부모 요소에 맞게 조정 */
  max-width: 200px; /* 이미지의 최대 크기를 제한하고 싶은 경우 설정 */
  height: auto; /* 이미지의 높이를 자동으로 조정하여 비율을 유지 */

  img {
    width: 100%; /* 이미지 너비를 부모 요소의 100%로 설정 */
    height: auto; /* 이미지의 높이를 자동으로 조정하여 비율을 유지 */
  }
`;

const FlexContainer = styled.div`
  display: flex;
`;

const Login = () => {
  // 로그인 함수 가져오기
  const { login, isAuthenticated, isInitialized } = useAuthContext();
  // console.log("isAuthenticated: ", isAuthenticated);
  // console.log("isInitialized: ", isInitialized);

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleId = (event) => {
    setId(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleLoginButton = async () => {
    try {
      console.log("버튼 실행:", id, password);
      const response = await login(id, password);
      console.log(response);
      if (response.data.code === 1000) {
        navigate("/dashboard");
      } else {
        alert("로그인 정보가 맞지 않습니다.");
        return;
      }
    } catch (error) {
      console.error(error);
    }

    // if (id === "hjcha" && password === "1111") {
    //   alert("로그인 성공");
    //   navigate("/dashboard");
    // } else {
    //   alert("로그인 정보가 맞지 않습니다.");
    //   return;
    // }
  };

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <OuterContainer>
      <LoginContainerStyle>
        <LogoStyle>
          <img src={logoImage}></img>
        </LogoStyle>
        <CredentialStyle>
          <InputFieldStyle>
            <input
              type="text"
              onChange={(event) => handleId(event)}
              placeholder="아이디"
            ></input>
          </InputFieldStyle>
          <InputFieldStyle>
            <input
              type="password"
              onChange={(event) => handlePassword(event)}
              placeholder="비밀번호"
            ></input>
          </InputFieldStyle>

          <FlexContainer>
            <ButtonWrapper onClick={handleLoginButton}>로그인</ButtonWrapper>
            <ButtonWrapper onClick={handleLoginButton}>회원가입</ButtonWrapper>
          </FlexContainer>
        </CredentialStyle>
        <span>아이디 또는 비밀번호 찾기</span>
        <span onClick={() => handleNavigate("/register")}>회원가입</span>
      </LoginContainerStyle>
    </OuterContainer>
  );
};

export default Login;
