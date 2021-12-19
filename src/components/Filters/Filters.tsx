import { FC, ChangeEvent, Dispatch, SetStateAction } from "react"
import { Input } from "../controls/Input/Input"
import { Checkbox } from "../controls/Checkbox/Checkbox"

export type ColorsFilter = Array<string>

type FiltersProps = {
  setSearch: Dispatch<SetStateAction<string>>
  setColorsFilter: Dispatch<SetStateAction<ColorsFilter>>
}

export const Filters: FC<FiltersProps> = ({ setSearch, setColorsFilter }) => {
  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  const handleColorsFilter = (event: ChangeEvent<HTMLInputElement>) => {
    const colorFromCheckbox: string = event.target.getAttribute('data-color')!
  
    setColorsFilter((prevState) => {
      if (prevState.includes(colorFromCheckbox)) {
        return prevState.filter((color) => color !== colorFromCheckbox)
      } else {
        return [...prevState, colorFromCheckbox]
      }
    })
  }

  return (
    <div style={{ padding: 20 }}>
      <Input placeholder='Search toys' onChange={handleSearch} />

      <div style={{ marginTop: 20 }}>
        <Checkbox color='white' onChange={handleColorsFilter} />
        <Checkbox color='yellow' onChange={handleColorsFilter} />
        <Checkbox color='red' onChange={handleColorsFilter} />
        <Checkbox color='blue' onChange={handleColorsFilter} />
        <Checkbox color='green' onChange={handleColorsFilter} />
      </div>
    </div>
  )
}
