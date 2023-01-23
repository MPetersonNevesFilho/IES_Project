import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageMeetings from "../pages/PageMeetings.jsx";
import PageContacts from "../pages/PageContacts.jsx";

function AppRoutes() {
    return (
        <>
        <BrowserRouter>

            <Routes>
                <Route path="/" element={<PageMeetings/>} />
                <Route exact path="/contacts" element={<PageContacts/>} />
                <Route path="/*" element={<PageMeetings/>} />
            </Routes>

        </BrowserRouter>
        </>
    );
}

export default AppRoutes;
