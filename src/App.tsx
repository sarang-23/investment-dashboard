import "./App.css";
import Dashboard from "./components/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    errorElement: <div>Not found</div>,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
