import { Link } from 'react-router-dom'
const NotFound = () => {
  return (
    <div className="nont-found">
      <h2>Sorry</h2>
      <p>That page not found</p>
      <Link to="/">Back to Home Page ...</Link>
    </div>
  )
}

export default NotFound
