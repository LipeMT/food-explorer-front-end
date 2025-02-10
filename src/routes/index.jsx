import { BrowserRouter } from "react-router-dom";

import { useEffect } from "react";

import { api } from "../services/api";

import { CustomRoutes } from "./custom.routes";
import { AdminRoutes } from "./admin.routes";
import { AuthRoutes } from "./auth.routes";

import { useAuth } from "../hooks/auth";

export function Routes() {

    const { user, signOut } = useAuth()

    function AccessRoutes() {
        switch (user.role) {
            case "admin":
                return <AdminRoutes />

            case "customer":
                return <CustomRoutes />

            default:
                return <CustomRoutes />
        }
    }

    useEffect(() => {
        api.get('/users/validated')
            .catch((error) => {
                if (error.response?.status === 401)
                    signOut()
            })
    }, [])

    return (
        <BrowserRouter>
            {user ? <AccessRoutes /> : <AuthRoutes />}
        </BrowserRouter>
    )
}