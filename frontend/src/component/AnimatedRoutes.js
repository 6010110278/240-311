import React from "react";
import { Routes, Route, useLocation } from 'react-router-dom';
import Page1 from './Page1';
import Page2 from './Page2';
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes(){
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Page1/>}/>
                <Route path="/note" element={<Page2/>}/>
            </Routes>
        </AnimatePresence>     
    );
}

export default AnimatedRoutes;