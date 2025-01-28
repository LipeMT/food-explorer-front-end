import { Container, Form } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Logo } from "../../components/Logo";

export function SignUp() {
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
                    />
                </div>

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

                <Button title="Criar conta" />
                <ButtonText title="Já tenho uma conta" />
            </Form>
        </Container>
    )
}