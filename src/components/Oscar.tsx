import React from 'react'


type Props = {
    children: React.ReactNode
}

const Oscar = (props: Props) => {
  return (
    <div>Oscar goes to: {props.children} </div>
  )
}

export default Oscar