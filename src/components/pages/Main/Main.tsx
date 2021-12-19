import { useNavigate } from 'react-router'

export const Main = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('../tree')
  }

  return (
    <div>
      <button onClick={handleClick}>button click me</button>
      <span>this is the main page</span>
    </div>
  )
}
