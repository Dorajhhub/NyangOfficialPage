import {
  HashRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import NyangNyangDescription from "./pages/NyangNyangDescription";
import NewsDetail from "./pages/NewsDetail";
import "./App.css";



function App() {

  return (
    <HashRouter> 
      <Routes>
        <Route path="/" element={<NyangNyangDescription />} />
        <Route path="/news" element={<NewsDetail />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
