import { NavLink } from 'react-router-dom'
import classes from './Navigation.module.scss'

type GetClassNameArgs = {
  isActive: boolean
}
const getClassName = ({ isActive }: GetClassNameArgs) => isActive ? classes.linkActive : classes.link

export const Navigation = () => {
  return (
    <div className={classes.navigation}>
      <NavLink className={getClassName} to='/toys'>
        Christmas toys
      </NavLink>
      <NavLink className={getClassName} to='/tree'>
        Christmas tree
      </NavLink>
    </div>
  )
}
