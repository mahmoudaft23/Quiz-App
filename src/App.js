import logo from "./logo.svg";
import "./App.css";
import Homepage from "./pages/homwpage";
import Question from "./pages/question";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Questions" element={<Question />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
