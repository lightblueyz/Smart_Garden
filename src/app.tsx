import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SignIn } from "./signin_area";
import { Register } from "./register_area";
import { HomeData } from "./home_data";
import { Lobby } from "./home";
import { AboutUs } from "./about_us";
import { Profile } from "./profile";
import { Stats } from "./stats";
import { Library } from "./library";
import { ChangeProfile } from "./change_profile";


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
  {
    path: "/changeprofile/:id",
    element: <ChangeProfile />,
  },
  {
    path: "/lobby/",
    element: <Lobby />,
  },
  {
    path: "/library/",
    element: <Library />,
  },

]);

export function App() {
  return <RouterProvider router={router} />;
}
