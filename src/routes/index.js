import { Navigate, useRoutes } from "react-router-dom";
// auth
import AuthGuard from "../auth/AuthGuard";
import GuestGuard from "../auth/GuestGuard";
// layouts
import MainLayout from "../layouts/main";
import SimpleLayout from "../layouts/simple";
import CompactLayout from "../layouts/compact";
import DashboardLayout from "../layouts/dashboard";
// config
import { PATH_AFTER_LOGIN } from "../config-global";
//
// path
import { PATH_DASHBOARD, PATH_MEMBER } from "./paths";

import {
  MemberMgmt,
  // Auth
  //   LoginPage,
  // Dashboard: General
  //   GeneralAppPage,
  // sports org mgmt -----chung----------------------
  //   InsListPage,
  //   InsViewPage,
  //   InsEditPage,
  //   InsCreatePage,
  //   ManagerApplyListPage,
  //   ManagerApplyViewPage,
  //
  //   PermissionDeniedPage,
  //
  //   Page500,
  //   Page403,
  //   Page404,
  //   Page502,
} from "./elements";

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    // Auth
    {
      path: "/",
      element: <Navigate to="/auth/login" replace />,
    },
    {
      path: "auth",
      children: [
        {
          path: "login",
          element: (
            // <GuestGuard>
            <LoginPage />
            // </GuestGuard>
          ),
        },
        { path: "login-unprotected", element: <LoginPage /> },
      ],
    },

    // member
    {
      path: PATH_MEMBER.root,
      element: <Navigate to={MemberMgmt} />,

      //  member 만들어 놓는 곳까지 했음. 여기에서부터 작업하면 됨. paths작업 했고, element도 했으니 이제 어디에 하나 메뉴 만들어서 Link걸어서 이동하는지 확인하면 됨.
    },

    // Dashboard
    {
      path: "dashboard",
      element: (
        // <AuthGuard>
        <DashboardLayout />
        // </AuthGuard>
      ),
      children: [
        { element: <Navigate to={PATH_AFTER_LOGIN} replace />, index: true },
        { path: "app", element: <GeneralAppPage /> },

        {
          path: "org-mgmt",
          children: [
            {
              element: <Navigate to="/dashboard/org-mgmt/list" replace />,
              index: true,
            },
            { path: "new", element: <InsCreatePage /> },
            { path: "list", element: <InsListPage /> },
            { path: "managerList", element: <ManagerApplyListPage /> },
            { path: ":id/view", element: <InsViewPage /> },
            { path: ":id/edit", element: <InsEditPage /> },

            { path: ":id/managerView", element: <ManagerApplyViewPage /> },
          ],
        },
        { path: "permission-denied", element: <PermissionDeniedPage /> },
      ],
    },
    {
      element: <CompactLayout />,
      children: [
        { path: "500", element: <Page500 /> },
        { path: "502", element: <Page502 /> },
        { path: "404", element: <Page404 /> },
        { path: "403", element: <Page403 /> },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}
