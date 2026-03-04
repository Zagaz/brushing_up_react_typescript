import React from 'react'

type Props = {
    handleClick : (event: React.MouseEvent<HTMLButtonElement>, id:number) => void
    buttonText : string
}

const Button = (props: Props) => {
  return (
    <button onClick={(event) => props.handleClick(event,1)}> {props.buttonText}</button>
  )
}

export default Button