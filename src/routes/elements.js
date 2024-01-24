// import { Suspense, lazy } from 'react';
// // components
// import LoadingScreen from '../components/loading-screen';

// // ----------------------------------------------------------------------

// const Loadable = (Component) => (props) =>
//   (
//     <Suspense fallback={<LoadingScreen />}>
//       <Component {...props} />
//     </Suspense>
//   );

// // ----------------------------------------------------------------------

// // AUTH
// export const LoginPage = Loadable(lazy(() => import('../pages/auth/LoginPage')));

// // DASHBOARD: GENERAL
// export const GeneralAppPage = Loadable(lazy(() => import('../pages/dashboard/GeneralAppPage')));

// // sports org mamt - chung
// export const InsListPage = Loadable(lazy(() => import('../pages/dashboard/InsListPage')));
// export const InsCreatePage = Loadable(lazy(() => import('../pages/dashboard/InsCreatePage')));
// export const InsViewPage = Loadable(lazy(() => import('../pages/dashboard/InsViewPage')));
// export const InsEditPage = Loadable(lazy(() => import('../pages/dashboard/InsEditPage')));
// export const ManagerApplyListPage = Loadable(
//   lazy(() => import('../pages/dashboard/ManagerApplyListPage'))
// );
// export const ManagerApplyViewPage = Loadable(
//   lazy(() => import('../pages/dashboard/ManagerApplyViewPage'))
// );

// // TEST RENDER PAGE BY ROLE
// export const PermissionDeniedPage = Loadable(
//   lazy(() => import('../pages/dashboard/PermissionDeniedPage'))
// );

// // MAIN
// export const Page500 = Loadable(lazy(() => import('../pages/Page500')));
// export const Page403 = Loadable(lazy(() => import('../pages/Page403')));
// export const Page404 = Loadable(lazy(() => import('../pages/Page404')));
// export const Page502 = Loadable(lazy(() => import('../pages/Page502')));
