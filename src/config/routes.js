import LayoutAdmin from "../layouts/LayoutAdmin";
import LayoutBasic from "../layouts/LayoutBasic";
// Páginas del administrador
import AdminHome from "../pages/Admin";
import AdminSignIn from "../pages/Admin/SignIn/SignIn";
import HomePage from "../pages/Home";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound/index";
import AdminUsers from "../pages/Admin/Users/";
import Modelo1 from "../pages/Admin/modelo1";
import Modelo2 from "../pages/Admin/modelo2";
import Modelo3 from "../pages/Admin/modelo3";
import AdminSubjects from "../pages/Admin/Subjects/Subject";

const routesAdmin = [
  {
    path: "/admin",
    layout: LayoutAdmin,
    component: AdminHome,
  },
  {
    path: "/admin/login",
    layout: LayoutAdmin,
    component: AdminSignIn,
  },
  {
    path: "/admin/users",
    layout: LayoutAdmin,
    component: AdminUsers,
  },
  {
    path: "/admin/subjects",
    layout: LayoutAdmin,
    component: AdminSubjects,
  },
  {
    path: "/admin/modelo1",
    layout: LayoutAdmin,
    component: Modelo1,
  },
  {
    path: "/admin/modelo2",
    layout: LayoutAdmin,
    component: Modelo2,
  },
  {
    path: "/admin/modelo3",
    layout: LayoutAdmin,
    component: Modelo3,
  },
];

const routesClient = [
  {
    path: "/",
    layout: LayoutBasic,
    component: HomePage,
  },
  {
    path: "/contact",
    layout: LayoutBasic,
    component: Contact,
  },
];

const globalRoutes = [
  {
    path: "*",
    layout: LayoutBasic,
    component: NotFound,
  },
];

const routes = [...routesAdmin, ...routesClient, ...globalRoutes];
export default routes;
