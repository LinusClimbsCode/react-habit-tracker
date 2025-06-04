import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HabitProvider } from "./components/HabitStorage";
import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HabitProvider>
      <App />
    </HabitProvider>
  </React.StrictMode>
);
