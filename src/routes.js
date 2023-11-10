import Home from "./components/Home";
import CarAffordability from "./components/CarAffordability";
import PurchasePage from "./components/PurchasePage";
import ThankYouPg from "./components/ThankYouPg";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/caraffordability",
    element: <CarAffordability />,
  },
  {
    path: "/purchasepage",
    element: <PurchasePage />,
  },
  {
    path: "/thankyoupg",
    element: <ThankYouPg />,
  },
  
];

export default routes;