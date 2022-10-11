import { Link } from "react-router-dom";

const Eight = () => {
  return (
    <>
      <div className="container">
        <Link to={'/'} className="return">Return to home</Link>
        <div className={"exercise-title exercise-eight"}>
          <h2>Exercise eight</h2>
        </div>
      </div>
    </>
  )
}

export default Eight;