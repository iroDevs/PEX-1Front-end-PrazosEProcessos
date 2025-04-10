import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Processo from "./Pages/Processo/Processo";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/processo/:id" element={<Processo />} />
      </Routes>
    </Router>
  );
}

export default App;
