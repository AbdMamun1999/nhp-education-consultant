import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import StudyAboard from "../Layouts/StudyAboard/StudyAboard";
import Contact from "../Pages/Contact";
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
      },
      {
        path:'/study-contact',
        element:<Contact/>
      },
    ],
  },
]);

export default routes;
