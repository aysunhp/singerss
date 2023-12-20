import Home from "../pages/Home";
import AddSinger from "./../pages/AddSinger";
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
    path: "/addArtist",
    element: <AddSinger />,
  },
];
