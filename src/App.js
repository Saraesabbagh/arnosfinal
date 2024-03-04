import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/pages/Homepage";
import Aboutpage from "./components/pages/Aboutpage";
import { Eventspage } from "./components/pages/Eventspage";
import { Gallerypage } from "./components/pages/Gallerypage";
import { Contactpage } from "./components/pages/Contactpage";
import Donatepage from "./components/pages/Donatepage";
import Activitypage from "./components/pages/Activitypage";
import { Newspage } from "./components/pages/Newspage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/news" element={<Newspage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/activities" element={<Activitypage />} />
          <Route path="/events" element={<Eventspage />} />
          <Route path="/gallery" element={<Gallerypage />} />
          <Route path="/contact" element={<Contactpage />} />
          <Route path="/donate" element={<Donatepage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
