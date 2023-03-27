import { Container, Banner} from './styles';

import { ButtonRed } from '../../components/ButtonRed';

import { Header } from '../../components/Header';

import { Comidas } from '../../components/Comidas';

import { Rodape } from '../../components/Rodape';

export default function Details(){

  return( 
    <Container>
      <Header/>
    <Comidas/>
    <Banner/>
    <Rodape/>
    </Container>
  )
};