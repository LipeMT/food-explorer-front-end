import { useContext, createContext, useState, useEffect } from 'react'

import { api } from '../services/api'

const AuthContext = createContext({})

export function AuthProvider({ children }) {

    const [data, setData] = useState({})

    async function signIn({ email, password }) {
        try {
            const response = await api.post('/sessions', { email, password }, { withCredentials: true });
            const { user } = response.data;
            localStorage.setItem('@food-explorer:user', JSON.stringify(user));
            setData({ user });
            return true;
        } catch (err) {
            alert(err.response?.data?.message || "Falha ao fazer login");
            return false;
        }
    }

    async function signOut() {
        try {
            await api.delete('/restaurants-access')
            localStorage.removeItem('@food-explorer:restaurant')
            await api.delete('/sessions')
            localStorage.removeItem('@food-explorer:user')
            localStorage.clear()
            setData({})
        } catch (err) {
            if (err.response) {
                return alert(err.response.data.message)
            } else {
                return alert("Falha ao fazer logout")
            }
        }
    }

    useEffect(() => {
        const user = localStorage.getItem('@food-explorer:user')

        if (user) {
            setData({ user: JSON.parse(user) })
        } else {
            setData({})
        }
    }, [])

    return (
        <AuthContext.Provider value={{ signIn, signOut, user: data.user }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext)
    return context
}
