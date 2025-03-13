import { Container, Form } from "./styles";

import { Link, useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { Logo } from "../../components/Logo";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useState } from "react";

export function SignUp() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    function handleSignUp() {
        if (!name || !email || !password) {
            return alert("Preencha todos os campos!")
        }

        api.post('/users', { name, email, password })
            .then(() => {
                alert("Usuário cadastrado com sucesso!")
                navigate('/')
            })
            .catch(error => {
                if (error.response) {
                    return alert(error.response.data.message)
                }
                console.error(error)
                alert("Erro ao cadastrar usuário!")
            })
    }

    return (
        <Container>
            <Logo type="h1"></Logo>
            <Form>
                <h1>Crie sua conta</h1>

                <div className="input-wrapper">
                    <label htmlFor="name">Seu nome</label>
                    <Input
                        id="name"
                        type="text"
                        placeholder="Exemplo: Maria da Silva"
                        onChange={e => setName(e.target.value)}
                    />
                </div>

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

                <Button title="Criar conta" onClick={handleSignUp} />
                <Link to="/">Já tenho uma conta</Link>
            </Form>
        </Container>
    )
}