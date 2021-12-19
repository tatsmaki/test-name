import { FC } from "react"
import { CHRISTMAS_TOYS } from "../../constants"
import { Card } from "../Card/Card"
import { ColorsFilter } from "../Filters/Filters"

type CardsProps = {
  search: string
  colorsFilter: ColorsFilter
}

export const Cards: FC<CardsProps> = ({ search, colorsFilter }) => {
  return (
    <section>
      {CHRISTMAS_TOYS
        .filter((toy) => {
          const isMatchesSearch = toy.name.toUpperCase().includes(search.toUpperCase())
          const isMatchesColorFilter = !colorsFilter.length || colorsFilter.includes(toy.color)
          
          if (isMatchesSearch && isMatchesColorFilter) {
            return true
          }
    
          return false
        })
        .map((card) => (
          <Card
            key={card.id}
            color={card.color}
            name={card.name}
          />
        ))}
    </section>
  )
}
