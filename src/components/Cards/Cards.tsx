import { useState, ChangeEvent } from "react"
import { Card } from "../Card/Card"

const CARDS = [
  {
    id: 1,
    name: 'toy',
    color: 'red'
  },
  {
    id: 2,
    name: 'candy',
    color: 'white'
  },
  {
    id: 3,
    name: 'wow',
    color: 'yellow',
    cheap: true,
  },
]

export const Cards = () => {
  const [ filter, setFilter ] = useState('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value)
  }

  return (
    <section>
      {CARDS
        .filter((card) => card.name.toUpperCase().includes(filter.toUpperCase()))
        .map((card) => (
          <Card
            key={card.id}
            color={card.color}
            name={card.name}
            cheap={card.cheap}
          />
        ))}
      <input value={filter} onChange={handleChange} />
    </section>
  )
}
