import React from 'react'
import { Title, Form, Repos } from './styles'
import logo from '../../assets/logo.svg'
import {api} from '../../services/api'

export const Dashboard: React.FC = () => {

    // cria tipo de dados para receber as informações do github
    interface GithubRepository {
        full_name: string;
        description: string;
        owner: {
            login: string;
            avatar_url: string;
        }
    }
    // cria uma nova variável e atribui o valor vazio pra ela
    const [novoRepositorio, setNovoRepositorio] = React.useState('')

    // cria uma nova variável que guarda todos os repositórios
    // essa variável é do tipo vetor de GithubRepository e inicia com vazio []
    const [repositorios, setRepositorios] = React.useState<GithubRepository[]>([])

    // função para atribuir valor ao novoRepositorio
    // função é chamada quando usuário digitar na caixa de texto
    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>): void {
        setNovoRepositorio(event.target.value) // valor do componente que sofreu o evento
    }
    // função é chamada quando o botão for pressionado
    function handleAddRepository(event: React.FormEvent<HTMLFormElement>){
        // vai na api do github e consulta pelo repositório de interesse
        // adiciona ao vetor este repositório
        event.preventDefault() // não recarrega a página
        try {
            api
            .get<GithubRepository>(`/${novoRepositorio}`)
            .then (response => {
                let novoRepo = response.data
                setRepositorios([...repositorios, novoRepo])
                console.log(repositorios)
            })
        }
        catch {
            alert(`Problema ao consultar o repositório`)
        }
    }
    return (
        <>
            <img src={logo} alt="GitCollection"/>
            <Title> Catálogo de repositórios do Github </Title>
            <Form onSubmit={handleAddRepository}>
                <input onChange={handleInputChange} placeholder="username/repository_name"/>
                <button type="submit"> Buscar </button>
            </Form>
            <Repos>
                { /* para cada repositório do vetor */
                    repositorios.map((repositorio, index) => (
                        <a href="/repo">
                        <img 
                            src={repositorio.owner.avatar_url} 
                            alt={repositorio.owner.login}/>
                        <div>
                            <strong> {repositorio.full_name} </strong>
                            <p> {repositorio.description}</p> 
                        </div>
                    </a>
                    ) )
                }
              
            </Repos>
        </>
    )
}
