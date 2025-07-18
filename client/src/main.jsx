import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import { StudentProvider } from "./context/StudentContext";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StudentProvider>
      <App />
      <Toaster />
    </StudentProvider>
  </BrowserRouter>
);
