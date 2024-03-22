import styled from "styled-components";
import { useForm } from "react-hook-form";

const CenterWrapper = styled.div`
  margin: auto;
  min-width: 30%;
  max-width: 40%;
  border: 3px solid black;
  border-radius: 20px;
  z-index: 999;
  overflow: auto;
`;

const FlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 400px;
  justify-content: center;
  align-items: center;
  background-color: #eee;
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
  // useForm에서 필요한 함수 및 상태 가져오기
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // 폼 내의 버튼을 클릭했을 떄 실행되는 함수
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  // 아래처럼 사용하면 인풋에 입력된 값이 lastname에 할당된다
  const lastName = watch("lastName");
  console.log(lastName);

  return (
    <>
      회원가입폼
      <h1>sddsfsdfds</h1>
      <CenterWrapper>
        <FlexDiv>
          {/* useForm의 handleSubmit을 적용해주고, 그 안에 다시 자체 핸들러 함수를 적용해줘야 한다. */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            style={{ backgroundColor: "egg", width: 500 }}
          >
            {/* require함수에 인풋 설정 */}
            {/* <label>이름</label> */}
            <input
              {...register("firstName", { required: true, maxLength: 20 })}
              style={{ display: "block", width: 500 }}
              placeholder="이름"
            />
            {errors?.firstName?.type === "required" && (
              <p>This field is required</p>
            )}
            {errors?.firstName?.type === "maxLength" && (
              <p>First name cannot exceed 20 characters</p>
            )}
            {/* <label>성</label> */}
            <input
              type="text"
              {...register("lastName", { required: true })}
              placeholder="성"
            />
            {errors?.lastName?.type === "required" && (
              <p>성을 입력해야 합니다.</p>
            )}
            <input type="submit" value="보내기"></input>
          </form>
          {/* <PreStyle>
            <CodeStyle>JS코드는 여기에</CodeStyle>
          </PreStyle> */}
        </FlexDiv>
        <PostBody>dsf</PostBody>
        <PostBody style={{ backgroundColor: "deepskyblue" }}>dsf</PostBody>
      </CenterWrapper>
    </>
  );
};

export default Register;
