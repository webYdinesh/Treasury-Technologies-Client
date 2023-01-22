import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Industries from "./Pages/Industries/Industries";
import Services from "./Pages/Services/Services";
import About from "./Pages/About/About";
import Vision from "./Pages/Vision/Vision";
import Contact from "./Pages/Contact/Contact";
import ScrollTop from "./Components/Scroll-To-Top/ScrollTop";
// React Toast
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
function App() {
    const routePath = useLocation();
    const onTop = () => {
        window.scrollTo(0, 0);
    };
    useEffect(() => {
        onTop();
    }, [routePath]);

    return (
        <>
            <div>
                <ToastContainer
                    position="top-center"
                    limit={3}
                    theme="colored"
                    autoClose={8000}
                />
            </div>
            <Header />

            <Routes>
                <Route exect path="/" element={<Home />} />
                <Route exect path="/industries" element={<Industries />} />
                <Route exect path="/services" element={<Services />} />
                <Route exect path="/vision" element={<Vision />} />
                <Route exect path="/about" element={<About />} />
                <Route exect path="/contact" element={<Contact />} />
            </Routes>
            <ScrollTop />
            <Footer />
        </>
    );
}

export default App;
