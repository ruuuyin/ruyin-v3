import { BrowserRouter, Routes, Route } from "react-router-dom";
import BaseLayout from "./pages/BaseLayout";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <BaseLayout />
    </BrowserRouter>
  );
}

export default App;
