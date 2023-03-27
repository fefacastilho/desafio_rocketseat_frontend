import { Container } from "./styles";

export function Inputaddpratos({title, icon: Icon, ...rest}){
    return(
        <Container>
            <h2> {title} </h2>
            {Icon &&<Icon size={20}/> }
            <input {...rest} />
        </Container>
    )
}
