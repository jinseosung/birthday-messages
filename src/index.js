import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./styles/main.css";
import Message from "./pages/Message";
import Thx from "./pages/Thx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/message/:languageId" element={<Message />} />
        <Route path="/thx/:languageId" element={<Thx />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
