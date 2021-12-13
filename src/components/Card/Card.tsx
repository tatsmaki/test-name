import { FC } from 'react'
import classes from './Card.module.scss'

console.log(classes)

type CardProps = {
  color: string
  name: string
  cheap?: boolean
}

export const Card: FC<CardProps> = ({ color, name }) => {
  return (
    <article className={classes.cardCard} style={{ backgroundColor: color}}>
      {name}
    </article>
  )
}
