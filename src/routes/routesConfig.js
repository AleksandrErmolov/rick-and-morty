import FavoritePage from "../components/FavoritePage/FavoritePage";
import HomePage from "../components/HomePage/HomePage";
import NotFound from "../components/NotFound/NotFound";
import Heroespage from "../pages/Heroespage/Heroespage";
import HeroPage from "../pages/HeroPage/HeroPage";

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
    path: "/favorites",
    component: <FavoritePage />,
    exatc: true,
  },

  {
    path: "/heroes/:id",
    component: <HeroPage />,
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
