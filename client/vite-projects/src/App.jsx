import { useState } from "react";
import { routes } from "./router/router";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter(routes);

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
