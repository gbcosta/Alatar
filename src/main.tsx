import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CreateNewSheet } from "./routes/createNewSheet";
import { CreatingSheet } from "./routes/creatingSheet";
import { CreateNewGame } from "./routes/newGame";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/createSheet" element={<CreatingSheet />} />
          <Route index element={<CreateNewSheet />} />
          <Route path="/newGame" element={<CreateNewGame />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
