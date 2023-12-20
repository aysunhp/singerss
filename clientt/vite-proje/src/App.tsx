import { routes } from "./router/router";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter(routes);
import "./App.css";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
