import { Routes, Route, useLocation } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Home from "./Containers/Home";
import About from "./Containers/About";
import Resume from "./Containers/Resume";
import Skils from "./Containers/Skils";
import Portfolio from "./Containers/Portfolio";
import Contact from "./Containers/Contact";
import Navbar from "./components/Navbar";
import particula from "./utils.js/particula";
import "./App.scss";

function App() {
    const location = useLocation();

    const renderParticleHomePage = location.pathname === "/";

    const handleInit = async (main) => {
        await loadFull(main);
    };

    return (
        <div className="App">
            {renderParticleHomePage && (
                <Particles
                    id="particles"
                    options={particula}
                    init={handleInit}
                />
            )}

            <Navbar />
            <div className="App__main-page-content">
                <Routes>
                    <Route index path="/" element={<Home />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/Resume" element={<Resume />} />
                    <Route path="/Skils" element={<Skils />} />
                    <Route path="/Portfolio" element={<Portfolio />} />
                    <Route path="/Contact" element={<Contact />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
