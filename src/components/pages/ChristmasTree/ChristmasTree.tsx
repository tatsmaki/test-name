import { useState } from 'react'
import { Cards } from "../../Cards/Cards";
import { Filters, ColorsFilter } from "../../Filters/Filters";

export const ChristmasTree = () => {
  const [ search, setSearch ] = useState('')
  const [ colorsFilter, setColorsFilter ] = useState<ColorsFilter>([])

  return (
    <div>
      <Filters
        setSearch={setSearch}
        setColorsFilter={setColorsFilter}
      />
      <Cards
        search={search}
        colorsFilter={colorsFilter}
      />
    </div>
  )
}
