// // ----------------------------------------------------------------------

// function path(root, sublink) {
//     return `${root}${sublink}`;
//   }

//   const ROOTS_AUTH = '/auth';
//   const ROOTS_DASHBOARD = '/dashboard';

//   // ----------------------------------------------------------------------

//   export const PATH_AUTH = {
//     root: ROOTS_AUTH,
//     login: path(ROOTS_AUTH, '/login'),
//     loginUnprotected: path(ROOTS_AUTH, '/login-unprotected'),
//   };

//   export const PATH_PAGE = {
//     comingSoon: '/coming-soon',
//     maintenance: '/maintenance',
//     pricing: '/pricing',
//     payment: '/payment',
//     about: '/about-us',
//     contact: '/contact-us',
//     faqs: '/faqs',
//     page403: '/403',
//     page404: '/404',
//     page500: '/500',
//     page502: '/502',
//     components: '/components',
//   };

//   export const PATH_DASHBOARD = {
//     root: ROOTS_DASHBOARD, //  '/dashboard';
//     general: {
//       app: path(ROOTS_DASHBOARD, '/app'),
//     },

//     // sports org ==============================
//     orgManagement: {
//       root: path(ROOTS_DASHBOARD, '/org-mgmt'),
//       new: path(ROOTS_DASHBOARD, '/org-mgmt/new'),
//       list: path(ROOTS_DASHBOARD, '/org-mgmt/list'),
//       veriList: path(ROOTS_DASHBOARD, '/org-mgmt/veriList'),
//       managerList: path(ROOTS_DASHBOARD, '/org-mgmt/managerList'),
//       // managerView: path(ROOTS_DASHBOARD,`/org-mgmt/managerView`),
//       view: (id) => path(ROOTS_DASHBOARD, `/org-mgmt/${id}/view`),
//       edit: (id) => path(ROOTS_DASHBOARD, `/org-mgmt/${id}/edit`),
//       veriDetail: (id) => path(ROOTS_DASHBOARD, `/org-mgmt/${id}/veriDetail`),
//       submitInfo: (id) => path(ROOTS_DASHBOARD, `/org-mgmt/${id}/submitInfo`),
//       managerView: (id) => path(ROOTS_DASHBOARD,`/org-mgmt/${id}/managerView`),
//     },
//   };

//   export const PATH_AUTH_SPORT = 'https://pis.sports.or.kr/login.do';
