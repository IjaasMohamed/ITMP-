import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import HomeLayout from "../layouts/HomeLayout";
import ProfileLayout from "../layouts/ProfileLayout";
import ConnectionLayout from "../layouts/ConnectionLayout";
import SkillComponent from "../components/SkillComponent";
import ChatComponent from "../components/ChatComponent";
import JobComponent from "../components/jobComponent";

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
    path: "/Skills",
    element: <SkillComponent />,
  },
  {
    path: "/chat",
    element: <ChatComponent />,
  },
  {
    path: "/jobs",
    element: <JobComponent />,
  }
]);
