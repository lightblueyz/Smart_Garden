<<<<<<< HEAD
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SingIn } from "./signin_area";
import { Register } from "./register_area";
import { HomeData } from "./home_data";
import { Home } from "./home/home";
import { AboutUs } from "./about_us";
import { Profile } from "./profile";

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
]);

export function App() {
  return <RouterProvider router={router} />;
}
=======
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SingIn } from "./signin_area";
import { Register } from "./register_area";
import { HomeData } from "./home_data";
import { Home } from "./home/home";
import { AboutUs } from "./about_us";
import { Profile } from "./profile";

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
]);

export function App() {
  return <RouterProvider router={router} />;
}
>>>>>>> fd88f77 (commited)
