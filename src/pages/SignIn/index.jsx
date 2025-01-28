import { Container, Form } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Logo } from "../../components/Logo";

export function SignIn() {
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
                    />
                </div>

                <div className="input-wrapper">
                    <label htmlFor="password">Senha</label>
                    <Input
                        id="password"
                        type="password"
                        placeholder="No mínimo 6 caracteres"
                    />
                </div>


                <Button title="Entrar" />
                <ButtonText title="Criar uma conta" />
            </Form>
        </Container>
    )
}