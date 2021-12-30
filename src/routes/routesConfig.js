import HomePage from "../components/HomePage/HomePage";
import NotFound from "../components/NotFound/NotFound";
import Heroespage from "../pages/Heroespage/Heroespage";

const routesConfig = [
  {
    path: "/",
    component: <HomePage />,
    exatc: true,
  },

  {
    path: "/heroes",
    component: <Heroespage />,
    exatc: true,
  },

  {
    path: "/not-found",
    component: <NotFound />,
    exatc: true,
  },

  {
    path: "*",
    component: <NotFound />,
    exatc: false,
  },
];

export default routesConfig;
