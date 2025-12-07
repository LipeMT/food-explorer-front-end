import { useContext, createContext, useState, useEffect } from 'react'
import { api } from '../services/api'

const restaurantContext = createContext({})

function RestaurantProvider({ children }) {

    const [data, setData] = useState({})

    async function selectRestaurant( restaurant_id ) {
        try {
            const restaurant = await api.post('/restaurants-access', { restaurant_id }, { withCredentials: true })
            localStorage.setItem('@food-explorer:restaurant', JSON.stringify(restaurant.data))
            return true
        } catch (err) {
            if (err.response) {
                return alert(err.response.data.message)
            } else {
                return alert("Falha ao fazer login")
            }
        }
    }

    useEffect(() => {
        const restaurant = localStorage.getItem('@food-explorer:restaurant')
        if (restaurant) {
            setData({ restaurant: JSON.parse(restaurant) })
        } else {
            setData({})
        }
    }, [])

    return (
        <restaurantContext.Provider value={{ selectRestaurant, restaurant: data.restaurant }}>
            {children}
        </restaurantContext.Provider>
    )
}

function useRestaurant() {
    const context = useContext(restaurantContext)
    return context
}

export { RestaurantProvider, useRestaurant }