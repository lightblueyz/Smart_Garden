import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SingIn } from "./signin_area";
import { Register } from "./register_area";
import { HomeData } from "./home_data";
import { Home } from "./home/home";
import { AboutUs } from "./about_us";
import { Profile } from "./profile";
import { Stats } from "./stats";

const router = createBrowserRouter([
  {
    path: "/home/home",
    element: <Home />,
  },
  {
    path: "/signin/",
    element: <SingIn />,
  },
  {
    path: "/signup/",
    element: <Register />,
  },
  {
    path: "/home/",
    element: <HomeData />,
  },
  {
    path: "/aboutus/",
    element: <AboutUs />,
  },
  {
    path: "/profile/",
    element: <Profile />,
  },
  {
    path: "/stats",
    element: <Stats />,
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
