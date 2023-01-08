import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import logo from "./assests/images/nhp-logo.png"

function App() {
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
