import { useNavigate } from 'react-router'

export const Main = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('../secondary')
  }

  return (
    <div>
      <button onClick={handleClick}>button click me</button>
      <span>this is the main page</span>
    </div>
  )
}
