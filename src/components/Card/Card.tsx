import { FC } from 'react'
import classes from './Card.module.scss'

type CardProps = {
  color: string
  name: string
}

export const Card: FC<CardProps> = ({ color, name }) => {
  return (
    <article className={classes.cardCard} style={{ backgroundColor: color}}>
      {name}
    </article>
  )
}
