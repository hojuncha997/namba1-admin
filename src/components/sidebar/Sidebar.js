import styled from "styled-components";

const SidebarStyle = styled.aside`
  background: #fff;
  width: 15%;
  height: calc(100vh - 50px);
  order: 1;
  //   overflow-y: auto;
  // border-right: 1px solid var(--text-grey);
  box-shadow: 2px 0 5px -1px rgba(0, 0, 0, 0.3);
  z-index: 99;
  padding-top: 50px;
  font-size: 1rem;
  position: fixed;
  left: 0;

  display: flex;
  justify-content: center;
`;

const SubMenuConainer = styled.div`
  // border: 1px solid black;
  // margin-left: 30px;
`;

const Sidebar = ({ menus }) => {
  return (
    <SidebarStyle>
      <SubMenuConainer>
        <div>
          <a href="https://www.naver.com">팝니다 등록</a>
        </div>
        <div>- 개인소형</div>
        <div>- 개인대형</div>
        <div>- 법인매매</div>
        <div>- 법인임대</div>
        <div>- 주선면허</div>
        <div style={{ borderBottom: "1px solid black" }}></div>
        <div>삽니다 등록</div>
        <div>- 개인소형</div>
        <div>- 개인중형</div>
        <div>- 개인대형</div>
        <div>- 법인매매</div>
        <div>- 주선면허</div>
      </SubMenuConainer>
    </SidebarStyle>
  );
};

export default Sidebar;
