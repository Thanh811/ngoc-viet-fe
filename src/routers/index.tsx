import { createBrowserRouter, useRouteError } from "react-router-dom";
import Home from "../containers/Home";
import Login from "../containers/Login";
import ErrorPage from "../components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "login",
    element: <Login />
  }
  
]);


export default router
