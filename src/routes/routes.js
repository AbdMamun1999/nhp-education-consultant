import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import StudyAboard from "../Layouts/StudyAboard/StudyAboard";
import Home from "../Pages/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path:'/study-aboard',
        element:<StudyAboard/>
      }
    ],
  },
]);

export default routes;
