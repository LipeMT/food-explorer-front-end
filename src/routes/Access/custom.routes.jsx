import { Routes, Route } from "react-router-dom"

import { Home } from "../../pages/Home"
import { Details } from "../../pages/Details"
import { Order } from "../../pages/Order"
import { DefaultLayout } from "../../layouts/default"
import { useEffect } from "react"
import { useAuth } from "../../hooks/auth"
import { api } from "../../services/api"

export function CustomRoutes() {

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
                <Route path="/" element={<Home />} />
                <Route exact path="/details/:id" element={<Details />} />
                <Route exact path="/order" element={<Order />} />
                <Route path="*" element={<Home />}></Route>
            </Route>
        </Routes>
    )
}