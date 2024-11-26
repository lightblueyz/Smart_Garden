import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SignIn } from "./signin_area";
import { Register } from "./register_area";
import { HomeData } from "./home_data";
//import { Home } from "./home/home";
import { AboutUs } from "./about_us";
import { Profile } from "./profile";
import { Stats } from "./stats";

const router = createBrowserRouter([
  {
    path: "/signin/",
    element: <SignIn />,
  },
  {
    path: "/signup/",
    element: <Register />,
  },
  {
    path: "/home/:id",
    element: <HomeData />,
  },
  {
    path: "/profile/:id",
    element: <Profile />,
  },
  {
    path: "/stats/:id",
    element: <Stats />,
  },
  {
    path: "/aboutus/",
    element: <AboutUs />,
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
