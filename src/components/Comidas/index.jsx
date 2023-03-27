
import { Container, Foto  } from "./styles";
import {AiOutlineHeart} from "react-icons/ai"
import { ButtonRed } from "../ButtonRed";

export function Comidas({title}){
    return(
        <Container>
            <AiOutlineHeart/>
            <Foto>
                <img src="https://github.com/fefacastilho.png" 
                alt="Foto do prato de comida" />
            </Foto>
            
            <h1>Salada Ravanello</h1>
            <h3>Massa fresca com camarões e pesto</h3>
            <h2>$35</h2>
            <ButtonRed title= "Incluir"/>
        </Container>
    )
}