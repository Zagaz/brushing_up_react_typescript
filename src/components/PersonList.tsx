type PersonProps = {
    name:{
        firstName: string
        lastName: string
    }[]
}

export const PersonsList = (props:PersonProps) => {
    return(
        <div>
            {props.name.map((name) => {
                return (
                    <div>
                        {name.firstName} {name.lastName}
                    </div>
                )
            })}        
        </div>
    )
}