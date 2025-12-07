import { BrowserRouter } from "react-router-dom";

import { CustomRoutes } from "./Access/custom.routes";
import { AdminRoutes } from "./Access/admin.routes";
import { RestaurantsRoutes } from "./Access/restaurants.routes"
import { AuthRoutes } from "./auth.routes";

import { useAuth } from "../hooks/auth";
import { SearchProvider } from "../hooks/search";
import { useRestaurant } from "../hooks/restaurant";

export function Routes() {

    const { user } = useAuth()

    const { restaurant } = useRestaurant()

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

    return (
        <SearchProvider>
            <BrowserRouter basename="/food-explorer-front-end">
                {(user && restaurant) ? <AccessRoutes /> : (user ? <RestaurantsRoutes /> : <AuthRoutes />)}
            </BrowserRouter>
        </SearchProvider>
    )
}