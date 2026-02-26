type GreetProps = {
    name: string
    messageCount: number
    isLoggedIn:boolean
}

export const Greet =(props:GreetProps)=> {
    return (
        <div>
            {
                props.isLoggedIn ?
                <>
                <h2>Greet Component</h2>
                <p>Welcome { props.name}</p>
                <p>You have {props.messageCount} notifications </p>
                </>:
                
                <h2>Welcome Guest</h2>

                
            }

            </div>
        )
        
}