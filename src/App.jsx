import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./header";
import Navbar from "./navbar";
import Category from "./categroy";
import Videos from "./content";
import Vidioin from "./vedioin";

function App() {
  return (
    <Router>
      <Header />
      <div className="flex">
        <div className="w-1/4">
          <Navbar />
        </div>
        <div className="flex-1">
          <Category />
          <Routes>
            <Route path="/" element={<Videos />} />
            <Route path="/video/:id" element={<Vidioin />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
