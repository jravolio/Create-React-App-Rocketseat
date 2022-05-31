import logoImg from '../../assets/logo.svg'
import { Container,Content } from './styles' // Container e Content são os componente de estilização


export function Header(){
    return(
        <Container>
            <Content>
                <img src={logoImg} alt="dtmoney" />
                <button type="button">
                    Nova transação
                </button>
            </Content>
        </Container>
    )
}