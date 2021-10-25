import React from 'react'
import { Title, Form, Repos } from './styles'
import logo from '../../assets/logo.svg'
export const Dashboard: React.FC = () => {
    // cria uma nova variável e atribui o valor vazio pra ela
    const [novoRepositorio, setNovoRepositorio] = React.useState('')

    // função para atribuir valor ao novoRepositorio
    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>): void {
        setNovoRepositorio(event.target.value) // valor do componente que sofreu o evento
    }
    
    return (
        <>
            <img src={logo} alt="GitCollection"/>
            <Title> Catálogo de repositórios do Github </Title>
            <Form>
                <input onChange={handleInputChange} placeholder="username/repository_name"/>
                <button type="submit"> Buscar </button>
            </Form>
            <Repos>
                <a href="/repo">
                    <img src="" alt="Repositório"/>
                    <div>
                        <strong> username/repositório </strong>
                        <p> Descrição do repositório</p> 
                    </div>
                </a>
            </Repos>
        </>
    )
}
