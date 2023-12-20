import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Values from "./components/Values";
import Estate from "./components/Estate";
import Clients from "./components/Clients";
import Founders from "./components/pages/Founders";
import Who_we_are from "./components/pages/Who-we-are";
import Contact from "./components/pages/Contact";
import Services from "./components/pages/Services";
import BookInspection from "./components/pages/BookInspection";

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" Component={HomePage} />
                    <Route path="/founders" Component={Founders} />
                    <Route path="/who-we-are" Component={Who_we_are} />
                    <Route path="/contact" Component={Contact} />
                    <Route path="/services" Component={Services} />
                    <Route
                        path="/book-an-inspection"
                        Component={BookInspection}
                    />
                </Routes>
                <Footer />
            </Router>
        </>
    );
}

function HomePage() {
    return (
        <div>
            <HeroSection />
            <Values />
            <Estate />
            <Clients />
        </div>
    );
}

export default App;
