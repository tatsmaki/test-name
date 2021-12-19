import { FC, ChangeEvent } from "react"
import classes from './Checkbox.module.scss'

type CheckboxProps = {
  label?: string
  color: string
  checked?: boolean
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

export const Checkbox: FC<CheckboxProps> = ({ label, color, checked, onChange }) => {
  return (
    <label className={classes.checkbox}>
      <input
        className={classes.input}
        data-color={color}
        type='checkbox'
        checked={checked}
        onChange={onChange}
      />
      <span className={classes.label} data-color={color}>{label}</span>
    </label>
  )
}
