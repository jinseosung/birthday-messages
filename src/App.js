import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Message from "./pages/Message";
import Thx from "./pages/Thx";
import "./styles/main.css";
import datas from "./datas/texts.json";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home datas={datas} />,
  },
  {
    path: "message/:languageId",
    element: <Message datas={datas} />,
  },
  {
    path: "thx/:languageId",
    element: <Thx datas={datas} />,
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
