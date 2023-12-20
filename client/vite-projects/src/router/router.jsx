import Home from "../pages/Home";
import AddUser from "./../pages/AddUser";
import Navbar from "../components/Navbar";
import Detail from "../pages/Detail";
export const routes = [
  {
    path: "/",
    element: <Navbar />,
  },
  {
    path: "/artists",

    element: <Home />,
  },
  {
    path: "/artists/:id",

    element: <Detail />,
  },
  {
    path: "/add",
    element: <AddUser />,
  },
];
