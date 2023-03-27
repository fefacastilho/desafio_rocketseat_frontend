import { Container } from "./styles";

export function Buttonwhite({ title, loading, ...rest }){

    return(

    <Container  
    type= "button"
     disabled={ loading }
     {...rest}
    >
        {loading ? "Carregando..." : title }
    </Container>
    )
}