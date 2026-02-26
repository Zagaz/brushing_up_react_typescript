type GreetProps = {
    name: string
}

export const Greet =(props:GreetProps)=> {
    return (
        <div>
            <h2>Greet Component</h2>
            <p>Welcome { props.name}</p>
            <p>You have 0 notifications </p>
        </div>
    )

}