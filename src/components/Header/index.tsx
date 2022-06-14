import logoImg from '../../assets/logo.svg'
import { Container,Content } from './styles' // Container e Content são os componente de estilização
import Modal from 'react-modal'
import { useState } from 'react'


export function Header(){

    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

    function handleOpenNewTransactionModal(){
        setIsNewTransactionModalOpen(true)
    }

    function handleCloseNewTransactionModal(){
        setIsNewTransactionModalOpen(false)
    }

    return(
        <Container>
            <Content>
                <img src={logoImg} alt="dtmoney" />
                <button type="button" onClick={handleOpenNewTransactionModal}>
                    Nova transação
                </button>
            </Content>
        </Container>
    )
}