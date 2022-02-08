import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Booking from '../pages/Booking';
import Main from '../pages/Main';
import News from '../pages/News';
import Moder from '../pages/Moder';
import { publicRoutes } from '../utils/const'

function AppRouter() {
    return <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/news" element={<News />} />
        <Route path="/moder" element={<Moder />} />
        <Route path="*" element={<Main />} />
    </Routes>;
}

export default AppRouter;
