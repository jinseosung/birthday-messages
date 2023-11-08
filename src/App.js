import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Message from "./pages/Message";
import Messages from "./pages/Messages";
import Thx from "./pages/Thx";
import Quiz from "./pages/Quiz";
import "./styles/main.css";
import datas from "./datas/texts.json";

const router = createBrowserRouter([
  {
    path: `${process.env.PUBLIC_URL}/`,
    element: <Home datas={datas} />,
  },
  {
    path: `${process.env.PUBLIC_URL}/message/:languageId`,
    element: <Message datas={datas} />,
  },
  {
    path: `${process.env.PUBLIC_URL}/thx/:languageId`,
    element: <Thx datas={datas} />,
  },
  {
    path: `${process.env.PUBLIC_URL}/messages`,
    element: <Messages />,
  },
  {
    path: `${process.env.PUBLIC_URL}/quiz`,
    element: <Quiz />,
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
