import HomePage from "../components/HomePage/HomePage";
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
];

export default routesConfig;
