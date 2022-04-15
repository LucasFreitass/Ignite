export function RepositoryItem (props) {
    return (
        <li> 
                    <strong>{props.repository.name}</strong> {/* Verificação, caso o props.repository seja vazio, usar o default*/}
                    <p>{props.repository.description}</p>

                    <a href={props.repository.html_url}>
                        Acessar repositório
                    </a>
                </li>
    )
}