import styled from "styled-components"; // 수정: {styled} -> styled
import logoImage from "../../assets/images/namba-logo-100.png"; // 이미지를 import
import { useLocation, useNavigate } from "react-router-dom";

const UpperNavStyle = styled.div`
  // 수정: styled.div를 사용하여 div 요소에 스타일 적용
  top: 0;
  width: 100%;
  height: 50px;
  font-size: 1rem;
  background-color: #fff;

  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  // 상단에 고정되게 하려면 position 속성이 필요
  position: fixed;
  color: black;
  z-index: 200;
  display: flex;
  // flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;
const LogoStyle = styled.div`
  // 컴포넌트 이름을 대문자로 시작하게 변경
  margin-left: 30px; // 왼쪽 마진으로 로고를 밀어냄
  margin-right: 50px;
  margin-top: 5px;
`;

const MainCategoryContainer = styled.div`
  // display: inline-block;
  // margin-right: 20px;
  display: flex;
  // align-items: center;
  justify-content: center;
`;

const MainCategoryItem = styled.div`
  margin-right: 30px;
  &last-child {
    margin-right: 0;
  }
`;

const RightMenuContainer = styled.div`
  margin-right: 30px;
`;

const mainCategories = [
  // { label: "로그인", path: "/login" },
  { label: "대시보드", path: "/dashboard" },
  { label: "멤버", path: "/dashboard/member" },
  { label: "프로필", path: "/dashboard/profile" },
];

const UpperNav = ({ title }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  const handleNavigate = (path) => {
    // if (window.location.pathname === path) :이렇게 직접 윈도우 객체 사용도 가능
    // 그러나React 컴포넌트의 리렌더링 흐름과 분리되어 있어 예상치 못한 동작을 초래 가능성 존재. 따라서 되도록 useLocation 사용 권장

    if (pathname === path) {
      window.location.reload();
    } else {
      navigate(path);
    }
  };

  const handleLogout = () => {
    // 로그아웃
    navigate("/login");
    alert("로그아웃 하였습니다.");
  };

  return (
    <UpperNavStyle>
      <LogoStyle>
        <a href="/login">
          <img src={logoImage} width="120px" alt="Logo" />
        </a>
      </LogoStyle>
      <MainCategoryContainer>
        {mainCategories.map((category, index) => {
          return (
            <MainCategoryItem key={index}>
              <div onClick={() => handleNavigate(category.path)}>
                {category.label}
              </div>
              {/* {category.label} */}
            </MainCategoryItem>
          );
        })}
      </MainCategoryContainer>

      <RightMenuContainer>알림 프로필</RightMenuContainer>
      <RightMenuContainer onClick={handleLogout}>로그아웃</RightMenuContainer>
    </UpperNavStyle>
  ); // 수정: JSX 형태로 컴포넌트 반환
};

export default UpperNav;
