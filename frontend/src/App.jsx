import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPage from "./pages/AdminPage.jsx";
import WatchPage from "./pages/WatchPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminPage />} />
        <Route path="/watch/:uid" element={<WatchPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
