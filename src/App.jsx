import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Founders from "./components/pages/Founders";
import Who_we_are from "./components/pages/Who-we-are";
import Contact from "./components/pages/Contact";
import Services from "./components/pages/Services";
import BookInspection from "./components/pages/BookInspection";
import HomePage from "./components/pages/HomePage";

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" Component={HomePage} />
                    <Route path="/about/founders" Component={Founders} />
                    <Route path="/about/who-we-are" Component={Who_we_are} />
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

export default App;
