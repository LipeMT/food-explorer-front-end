import { Routes, Route } from "react-router-dom"

import { Home } from "../../pages/Home"
import { Details } from "../../pages/Details"
import { EditDish } from "../../pages/EditDish"
import { NewDish } from "../../pages/NewDish"
import { DefaultLayout } from "../../layouts/default"
import { Restaurants } from "../../pages/Restaurants"
import { useEffect } from "react"
import { api } from "../../services/api"
import { useAuth } from "../../hooks/auth"

export function AdminRoutes() {
    const { signOut } = useAuth()

    useEffect(() => {
        api.get('/users/validated')
            .catch((error) => {
                console.log(error)
                if (error.response?.status === 401)
                    signOut()
            })
    }, [])

    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route exact path="/restaurants" element={<Restaurants />} />
                <Route path="/" element={<Home />} />
                <Route exact path="/details/:id" element={<Details />} />
                <Route exact path="/edit/:id" element={<EditDish />} />
                <Route exact path="/new" element={<NewDish />} />
                <Route path="*" element={<Home />}></Route>
            </Route>
        </Routes>
    )
}