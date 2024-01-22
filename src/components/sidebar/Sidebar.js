import styled from "styled-components";

const SidebarStyle = styled.aside`
  background: #fff;
  width: 345px;
  height: calc(100vh - 50px);
  order: 1;
  //   overflow-y: auto;
  // border-right: 1px solid var(--text-grey);
  box-shadow: 2px 0 5px -1px rgba(0, 0, 0, 0.3);
  z-index: 99;
  font-size: 30px;
`;

const Sidebar = ({ menus }) => {
  return <SidebarStyle>{menus}</SidebarStyle>;
};

export default Sidebar;
