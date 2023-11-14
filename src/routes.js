import Home from "./components/Home";
import CarAffordability from "./components/CarAffordability";
import Purchase from "./components/Purchase";
import ThankYou from "./components/ThankYou";
import ContactUs from "./components/ContactUs";
import ErrorPage from "./components/ErrorPage"; 


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
    path: "/purchase/:carId",
    element: <Purchase />,
  },
  {
    path: "/thankyou",
    element: <ThankYou />,
  },
  {
    path: "/contactus",
    element: <ContactUs />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
  
];

export default routes;