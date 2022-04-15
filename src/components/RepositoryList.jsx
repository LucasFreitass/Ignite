import { useState, useEffect } from 'react';
import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';

export function RepositoryList () {

    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        // buscar os repositorios
        fetch('https://api.github.com/orgs/rocketseat/repos')
        .then(response => response.json()) // quando o fethc me devolver uma resposta, eu converto ele pra json
        .then(data => setRepositories(data)) // quando a resposta for convertida pra json, eu tenho os dados do meu repositorio
        // para testar, eu dou um consolo.log(data) pra ver o que acontece
    }, []);

    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul> {/* Lista não ordenada */} 
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.name}repository={repository} />
                } )}
    
               
            </ul>
        </section>
    )
}