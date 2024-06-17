import { Link } from 'react-router-dom'

export const Error = () => {
  return (
    <div className="middle">
      <div className="error">
        <h2>404</h2>
        <p className="error__txt">Page not found</p>
        <Link className={`styledLink`} to="/">
          Go to Home
        </Link>
      </div>
    </div>
  )
}
