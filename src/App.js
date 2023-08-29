import { Routes, Route } from "react-router-dom";
import Home from "./Containers/Home";
import About from "./Containers/About";
import Resume from "./Containers/Resume";
import Skils from "./Containers/Skils";
import Portfolio from "./Containers/Portfolio";
import Contact from "./Containers/Contact";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Navbar />

            <Routes>
                <Route index path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Resume" element={<Resume />} />
                <Route path="/Skils" element={<Skils />} />
                <Route path="/Portfolio" element={<Portfolio />} />
                <Route path="/Contact" element={<Contact />} />
            </Routes>
        </div>
    );
}

export default App;
