import { Container, Banner} from './styles';

import { ButtonRed } from '../../components/ButtonRed';

import { HeaderPedidos } from '../../components/Header';

import { Comidas } from '../../components/Comidas';

import { Rodape } from '../../components/Rodape';

export default function Details(){

  return( 
    <Container>
      <HeaderPedidos/>
    <Comidas/>
    <Banner/>
    <Rodape/>
    </Container>
  )
};