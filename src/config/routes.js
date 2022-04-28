import LayoutAdmin from "../layouts/LayoutAdmin";
import LayoutBasic from "../layouts/LayoutBasic";
// Páginas del administrador
import AdminHome from "../pages/Admin";
import AdminSignIn from "../pages/Admin/SignIn";
import HomePage from "../pages/Home";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
// Arreglo de rutas disponibles para el administrador
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
];

const routesClient = [
  {
    path: "/home",
    layout: LayoutBasic,
    component: HomePage,
  },
  {
    path: "/home/contact",
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
