import { FiMail, FiLock, FiUser} from 'react-icons/fi';

import { Container, Form, Logo } from "./styles";
import { Input } from  "../../components/Input";
import { ButtonRed } from  "../../components/ButtonRed";
import {BsFillHexagonFill} from 'react-icons/bs'



export function SignUp() {
    return(
        
        <Container>
          <Logo>
          <BsFillHexagonFill/>
          <h1>food explorer</h1>
          </Logo>
            <Form>
                <h1>Crie sua conta</h1>

                <h2>Nome</h2>
                <Input
                 placeholder="Name"
                 type="text"
                 icon={FiUser}
                />

                <h2>Email</h2>
                <Input
                 placeholder="E-mail"
                 type="text"
                 icon={FiMail}
                />

                <h2>Senha</h2>
                <Input
                 placeholder="No mínimo 6 caracteres"
                 type="password"
                 icon={FiLock}
                />
                <ButtonRed title={"Criar conta"}/>

                <a href='n'>
                    Já tenho uma conta
                </a>
                   

            </Form>

        </Container>
    );
};