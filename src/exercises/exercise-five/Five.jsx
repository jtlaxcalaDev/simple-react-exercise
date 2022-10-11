import { Link } from "react-router-dom";

const Five = () => {
  return (
    <>
      <div className="container">
        <Link to={'/'} className="return">Return to home</Link>
        <div className={"exercise-title exercise-five"}>
          <h2>Exercise five</h2>
        </div>
      </div>
    </>
  )
}

export default Five;