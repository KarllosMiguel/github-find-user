import React from 'react'
import { Container, Input, SearchButton } from './styles';
import {FiSearch} from 'react-icons/fi'


const InputContainer = () => {
  return (
      <>
        <Container>
            <Input placeholder='Digite o nome do usuário aqui'/>
            <SearchButton><FiSearch size={15}/></SearchButton>
        </Container>
     </> 
  )
}

export default InputContainer;