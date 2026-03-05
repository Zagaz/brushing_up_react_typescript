import { Name } from "./Person.type"

type PersonProps = {
    name:Name[]
}

export const PersonsList = ({ name }:PersonProps) => {
    return(
        <div>
            {name.map((name) => {
                return (
                    <div>
                        {name.first} {name.last}
                    </div>
                )
            })}        
        </div>
    )
}