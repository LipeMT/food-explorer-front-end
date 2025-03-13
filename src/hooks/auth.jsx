import { useContext, createContext, useState, useEffect } from 'react'

import { api } from '../services/api'

const AuthContext = createContext({})

function AuthProvider({ children }) {

    const [data, setData] = useState({})

    async function signIn({ email, password }) {
        try {
            const response = await api.post('/sessions', { email, password }, { withCredentials: true })

            const { user } = response.data
            localStorage.setItem('@food-explorer:user', JSON.stringify(user))

            setData({ user })
        }
        catch (err) {
            if (err.response) {
                return alert(err.response.data.message)
            } else {
                return alert("Falha ao fazer login")
            }
        }

    }

    async function signOut() {
        try {
            await api.delete('/sessions')
            localStorage.removeItem('@food-explorer:user')
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

function useAuth() {
    const context = useContext(AuthContext)
    return context
}
export { AuthContext, AuthProvider, useAuth }