import { Container, Form, Linhaaddpratos } from "./styles";
import { HeaderPedidos } from "../../components/HeaderPedidos";
import {Textarea} from "../../components/Textarea"
import {Buttonwhite} from "../../components/Buttonwhite"
import { Rodape } from "../../components/Rodape";
import { ButtonVoltar } from "../../components/ButtonVoltar";
import { Inputaddpratos } from "../../components/Inputaddpratos";
import { BsUpload } from 'react-icons/bs';

export function AddPratos(){
    return(
        <Container>
            <HeaderPedidos/>
            
            <Form> 
                <ButtonVoltar/>
        
                <h1>Adicionar prato</h1>
                    
                <Linhaaddpratos>

                
                   
                <Inputaddpratos
                placeholder= "Selecionar imagem"  
               
                type="img"
                title="Imagem do prato"
                
                />
                
                <Inputaddpratos
                 placeholder="Ex: Salada Ceasar"
                 type="text"
                 title="Nome"
                />
                
                <Inputaddpratos
                 placeholder="Categoria"
                 type="text"
                 title="Refeição"
                />
                </Linhaaddpratos>
                
                    
                <h2>Descrição</h2>  
               <Textarea placeholder= "Fale brevemente sobre o prato, seus ingredientes e composição"/>
                
               
               <Buttonwhite title={"salvar alterações"} />

              
            </Form> 
            
             <Rodape/>
        </Container>
          
    )
};