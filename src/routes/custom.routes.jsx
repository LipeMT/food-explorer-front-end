import { Routes, Route } from "react-router-dom"

import { Home } from "../pages/Home"
import { Details } from "../pages/Details"

export function CustomRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route exact path="/details/:id" element={<Details />} />
            <Route path="*" element={<Home />}></Route>
        </Routes>
    )
}