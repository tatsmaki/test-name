import { FC } from 'react'

type CardProps = {
  color: string
  name: string
  cheap?: boolean
}

export const Card: FC<CardProps> = ({ color, name }) => {
  return (
    <article style={{ backgroundColor: color}}>
      {name}
    </article>
  )
}
