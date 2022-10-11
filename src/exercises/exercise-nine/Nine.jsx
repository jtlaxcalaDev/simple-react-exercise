import { Link } from "react-router-dom";

const Nine = () => {
  return (
    <>
      <div className="container">
        <Link to={'/'} className="return">Return to home</Link>
        <div className={"exercise-title exercise-nine"}>
          <h2>Exercise nine</h2>
        </div>
      </div>
    </>
  )
}

export default Nine;