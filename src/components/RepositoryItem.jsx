export function RepositoryItem (props) {
    return (
        <li> 
                    <strong>{props.repository.name ?? 'Default'}</strong> {/* Verificação, caso o props.repository seja vazio, usar o default*/}
                    <p>{props.repository.description}</p>

                    <a href={props.repository.link}>
                        Acessar repositório
                    </a>
                </li>
    )
}