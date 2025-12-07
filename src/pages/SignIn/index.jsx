import { useState } from "react";
import { useAuth } from '../../hooks/auth'

import { Container, Form } from "./styles";
import { Link, useNavigate } from "react-router-dom";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Logo } from "../../components/Logo";

export function SignIn() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { signIn } = useAuth()
    const navigate = useNavigate()

    async function handleSignIn() {
        try {
            const logged = await signIn({ email, password })
            if(logged) navigate('/restaurants')
                
        } catch (error) {
            console.log(error)
            if (error.response) {
                alert(error.response.data.message)
            } else {
                alert('Erro ao fazer login')
            }
        }
    }

    return (
        <Container>
            <Logo type="h1"></Logo>
            <Form>
                <h1>Faça Login</h1>

                <div className="input-wrapper">
                    <label htmlFor="email">Email</label>
                    <Input
                        id="email"
                        type="text"
                        placeholder="Exemplo: exemplo@exemplo.com.br"
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>

                <div className="input-wrapper">
                    <label htmlFor="password">Senha</label>
                    <Input
                        id="password"
                        type="password"
                        placeholder="No mínimo 6 caracteres"
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>


                <Button title="Entrar" onClick={handleSignIn} />
                <Link to="/register">Criar uma conta</Link>
            </Form>
        </Container>
    )
}