import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./page/LandingPage";
import Thanks from "./page/Thanks";

const App = () => {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/submitted" element={<Thanks />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
