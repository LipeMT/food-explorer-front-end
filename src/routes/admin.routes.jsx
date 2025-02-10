import { Routes, Route } from "react-router-dom"

import { Home } from "../pages/Home"
import { Details } from "../pages/Details"
import { EditDish } from "../pages/EditDish"
import { NewDish } from "../pages/NewDish"

export function AdminRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route exact path="/details/:id" element={<Details />} />
            <Route exact path="/edit/:id" element={<EditDish />} />
            <Route exact path="/new" element={<NewDish />} />
            <Route path="*" element={<Home />}></Route>
        </Routes>
    )
}