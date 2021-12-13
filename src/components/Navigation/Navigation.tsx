import { Link } from 'react-router-dom'

export const Navigation = () => {
  return (
    <div>
      <Link to='/main'>main page</Link>
      <Link to='/secondary'>secondary page</Link>
    </div>
  )
}