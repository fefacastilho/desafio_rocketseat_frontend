import { Container } from "./styles";

export function ButtonRed({ title, loading, ...rest }){

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