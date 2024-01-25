/*
프로젝트 전역에서 사용할 경로들을 설정한다. 여기서 상수로 설정한 경로들은 아래와 같은 파일에서 사용한다.

- src/route/index.js : useRoutes로 라우팅 구조를 정의하는 파일. react-router-dom 라이브러리의 컴포넌트인 <Link>, <useNavigate> 등이 여기를 탐색한다.
- config-navigation.js : 네비게이션바(사이드바)에 배치할 메뉴를 배열로 구성할 때 사용한다.
- config-global.js : 전역변수를 작성하는 파일

etc.



*/

// ----------------------------------------------------------------------

function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOTS_AUTH = "/auth";
const ROOTS_DASHBOARD = "/dashboard";
const ROOTS_MEMBER = "/member";

// ----------------------------------------------------------------------

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, "/login"),
  loginUnprotected: path(ROOTS_AUTH, "/login-unprotected"),
};

export const PATH_PAGE = {
  comingSoon: "/coming-soon",
  maintenance: "/maintenance",
  pricing: "/pricing",
  payment: "/payment",
  about: "/about-us",
  contact: "/contact-us",
  faqs: "/faqs",
  page403: "/403",
  page404: "/404",
  page500: "/500",
  page502: "/502",
  components: "/components",
};

// 남바원 회원관리
export const PATH_MEMBER = {
  root: ROOTS_MEMBER, //  '/member';
  general: {
    member: path(ROOTS_MEMBER, "/member"),
  },
};

// 대시보드
export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD, //  '/dashboard';
  general: {
    app: path(ROOTS_DASHBOARD, "/app"),
  },

  // namba1-admin: 회원관리 ============================
  member: {
    root: path(ROOTS_DASHBOARD, "/member"),
    personal: path(ROOTS_DASHBOARD, "/member/personal"),
    corporate: path(ROOTS_DASHBOARD, "/member/corporate"),
  },

  // sports org ==============================
  //   orgManagement: {
  //     root: path(ROOTS_DASHBOARD, "/org-mgmt"),
  //     new: path(ROOTS_DASHBOARD, "/org-mgmt/new"),
  //     list: path(ROOTS_DASHBOARD, "/org-mgmt/list"),
  //     veriList: path(ROOTS_DASHBOARD, "/org-mgmt/veriList"),
  //     managerList: path(ROOTS_DASHBOARD, "/org-mgmt/managerList"),
  //     // managerView: path(ROOTS_DASHBOARD,`/org-mgmt/managerView`),
  //     view: (id) => path(ROOTS_DASHBOARD, `/org-mgmt/${id}/view`),
  //     edit: (id) => path(ROOTS_DASHBOARD, `/org-mgmt/${id}/edit`),
  //     veriDetail: (id) => path(ROOTS_DASHBOARD, `/org-mgmt/${id}/veriDetail`),
  //     submitInfo: (id) => path(ROOTS_DASHBOARD, `/org-mgmt/${id}/submitInfo`),
  //     managerView: (id) => path(ROOTS_DASHBOARD, `/org-mgmt/${id}/managerView`),
  //   },
};

export const PATH_AUTH_SPORT = "https://pis.sports.or.kr/login.do";
