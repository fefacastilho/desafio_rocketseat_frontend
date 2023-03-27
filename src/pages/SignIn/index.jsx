import { FiMail, FiLock} from 'react-icons/fi';

import { Container, Form, Logo } from "./styles";
import { Input } from  "../../components/Input";
import { ButtonRed } from  "../../components/ButtonRed";
import {BsFillHexagonFill} from 'react-icons/bs';


export function SignIn() {
    return(
        <Container>
           < Logo>
          <BsFillHexagonFill/>
          <h1>food explorer</h1>
          </Logo>
            <Form>
                <h1>Faça seu login</h1>
                <h2>Email</h2>
                <Input
                 placeholder="E-mail"
                 type="text"
                 icon={FiMail}
                />

                <h2>Senha</h2>

                <Input
                 placeholder="Senha"
                 type="password"
                 icon={FiLock}
                />
                <ButtonRed title={"Entrar"}/>

                <a href='n'>
                    Criar conta
                </a>
                   

            </Form>

        </Container>
    );
};