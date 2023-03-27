import {RxExit} from 'react-icons/rx'
import { Container, Logout, Logo, Button, Form } from "./styles";
import {BsFillHexagonFill} from 'react-icons/bs';
import {BsReceipt} from 'react-icons/bs';
import { Input } from  "../../components/Input";
import { AiOutlineSearch } from "react-icons/ai";
import { ButtonRed } from '../ButtonRed';

export function HeaderPedidos(){
    return(
        <Container>
            <Logo>
            <BsFillHexagonFill/>
            <h1>food explorer</h1>

            
            </Logo>
            <Form>
            <Input
                 placeholder="Busque por pratos ou ingredientes"
                 type="text"
                 icon={AiOutlineSearch}
                />
            </Form>
            <Button> 
                
                <ButtonRed title={"Novo Prato"}/>
              
            </Button>
            <Logout>
                <RxExit/>
            </Logout>
        </Container>
    )
}