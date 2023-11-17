import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import SelectLan from "./pages/SelectLan";
import Message from "./pages/Message";
import Messages from "./pages/Messages";
import Thx from "./pages/Thx";
import QuizMain from "./pages/QuizMain";
import Quiz from "./pages/Quiz";
import QuizThx from "./pages/QuizThx";
import "./styles/main.css";
import datas from "./datas/texts.json";

const router = createBrowserRouter([
  {
    path: `/`,
    element: <Home datas={datas} />,
  },{
    path: `/lan`,
    element: <SelectLan datas={datas} />,
  },
  {
    path: `/message/:languageId`,
    element: <Message datas={datas} />,
  },
  {
    path: `/thx/:languageId`,
    element: <Thx datas={datas} />,
  },
  {
    path: `/messages`,
    element: <Messages />,
  },
  {
    path: `/quiz/:name`,
    element: <Quiz />,
  },
  {
    path: `/quizmain`,
    element: <QuizMain />,
  },
  {
    path: `/quizthx`,
    element: <QuizThx />,
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
