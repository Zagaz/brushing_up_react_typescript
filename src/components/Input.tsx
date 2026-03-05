import React from 'react'

type Props = {
  value: string
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
}

export const Input = ({ value, handleClick }: Props) => {
  return (
    <button onClick={(event) => handleClick(event, 1)}> {value}</button>
  )
}

