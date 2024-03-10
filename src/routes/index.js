import { Navigate, useRoutes } from "react-router-dom";
// auth

//
// path
import { PATH_DASHBOARD, PATH_MEMBER } from "./paths";

import {
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
      // element: <Navigate to="/auth/login" replace />,
      element: <div>♡♡♡♡♡♡♡♡♡메인♡♡♡♡♡♡♡♡♡</div>,
    },

    // memberd
    // {
    //   path: PATH_MEMBER.root,d
    //   element: <Navigate to={MemberMgmt} />,

    //   //  member 만들어 놓는 곳까지 했음. 여기에서부터 작업하면 됨. paths작업 했고, element도 했으니 이제 어디에 하나 메뉴 만들어서 Link걸어서 이동하는지 확인하면 됨.
    // },
    {
      path: PATH_MEMBER.root,
      element: <PersnoalCompact />,
    },
    {
      path: "profile",
      element: <PersnoalCompact2 />,
    },

    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}
