import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import HomePage from "./pages/HomePage";
import DataPage from "./pages/DataPage";
import HarshPage from "./pages/HarshPage";
import SharePage from "./pages/SharePage";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Navigate replace to="data" />} />
            <Route path="home" element={<HomePage />} />
            <Route path="data" element={<DataPage />} />
            <Route path="harsh" element={<HarshPage />} />
            <Route path="share" element={<SharePage />} />
          </Route>
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
