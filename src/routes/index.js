import { Navigate, useRoutes } from "react-router-dom";
// auth

//
// path
import { PATH_DASHBOARD, PATH_MEMBER } from "./paths";

import {
  AuthGuard,
  GuestGuard,
  Login,
  Register,
  DashboardLayout,
  DashboardHome,
  PersnoalCompact,
  PersnoalCompact2,

  // Auth
} from "./elements";

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    // Auth
    {
      path: "/",
      element: <Navigate to="/login" replace />,
      // element: <div>메인("/")</div>,
    },
    {
      path: "login",
      element: (
        <GuestGuard>
          <Login />,
        </GuestGuard>
      ),
    },
    {
      path: "register",
      element: <Register />,
    },
    {
      path: "dashboard",
      element: (
        <AuthGuard>
          <DashboardLayout />
        </AuthGuard>
      ),
      children: [
        // { path: "/", element: <DashboardHome />, index: true },
        // 위와 같이 하면 오류 발생. 자식 라우트에서 절대 경로(/)를 사용했기 때문. index: true를 사용하는 경우, 자식 라우트의 path 속성에 절대 경로(/)를 지정하지 않고, 대신 경로를 비워두어야 함.

        { element: <DashboardHome />, index: true },
        // { element: <Navigate to="/dashboard/member" replace />, index: true }, // 이런 방식으로도 할 수 있다. "/"로 접근했을 때 특정 페이지로 리다이렉트 시킬 때 사용한다.

        { path: "member", element: <PersnoalCompact /> },
        { path: "profile", element: <PersnoalCompact2 /> },
      ],
    },

    // memberd
    // {
    //   path: PATH_MEMBER.root,d
    //   element: <Navigate to={MemberMgmt} />,

    //   //  member 만들어 놓는 곳까지 했음. 여기에서부터 작업하면 됨. paths작업 했고, element도 했으니 이제 어디에 하나 메뉴 만들어서 Link걸어서 이동하는지 확인하면 됨.
    // },
    // {
    //   path: PATH_MEMBER.root,
    //   element: <PersnoalCompact />,
    // },
    // {
    //   path: "profile",
    //   element: <PersnoalCompact2 />,
    // },

    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}
