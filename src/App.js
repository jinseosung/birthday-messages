import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Message from "./pages/Message";
import Thx from "./pages/Thx";
import "./styles/main.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "message/:languageId",
    element: <Message />,
  },
  {
    path: "thx/:languageId",
    element: <Thx />,
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}