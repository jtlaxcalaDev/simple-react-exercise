import { Link } from "react-router-dom";

const Three = () => {
  return (
    <>
      <div className="container">
        <Link to={'/'} className="return">Return to home</Link>
        <div className={"exercise-title exercise-three"}>
          <h2>Exercise three</h2>
        </div>
      </div>
    </>
  )
}

export default Three;