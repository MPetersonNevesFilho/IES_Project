import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageMeetings from "../pages/PageMeetings.jsx";
import PageContacts from "../pages/PageContacts.jsx";
import PageError404 from "../pages/PageError404.jsx";

function AppRoutes() {
    return (
        <>
        <BrowserRouter>

            <Routes>
                <Route path="/" element={<PageMeetings/>} />
                <Route exact path="/contacts" element={<PageContacts/>} />
                <Route path="/*" element={<PageError404/>} />
            </Routes>

        </BrowserRouter>
        </>
    );
}

export default AppRoutes;
