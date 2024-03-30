import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import HomeLayout from "../layouts/HomeLayout";
import ProfileLayout from "../layouts/ProfileLayout";
import ConnectionLayout from "../layouts/ConnectionLayout";
import Dashboard from "../components/Dashboard";
import ChatComponent from "../components/ChatComponent";
import NotificationComponent from "../components/NotificationComponent";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/home",
    element: <HomeLayout />,
  },
  {
    path: "/profile",
    element: <ProfileLayout />,
  },
  {
    path: "/connections",
    element: <ConnectionLayout />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/chat",
    element: <ChatComponent />,
  },
  {
    path: "/notification",
    element: <NotificationComponent />,
  },

]);
