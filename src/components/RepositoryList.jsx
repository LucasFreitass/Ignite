import { RepositoryItem } from "./RepositoryItem";

const repository = {  //* Objeto para salvar todas as informações do repositorio e passar isso em vez de um texto nas propriedades do componente 
    name: 'unform',
    description: 'Forms in React',
    link: 'https://github.com/unform/unform'
}

export function RepositoryList () {
    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul> {/* Lista não ordenada */} 
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
               
            </ul>
        </section>
    )
}