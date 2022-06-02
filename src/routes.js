import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './screens/home';

const Routers = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home />} />
        </Routes>
    </BrowserRouter>
)

export default Routers;
