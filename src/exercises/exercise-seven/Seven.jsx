import { Link } from "react-router-dom";

const Seven = () => {
  return (
    <>
      <div className="container">
        <Link to={'/'} className="return">Return to home</Link>
        <div className={"exercise-title exercise-seven"}>
          <h2>Exercise seven</h2>
        </div>
      </div>
    </>
  )
}

export default Seven;