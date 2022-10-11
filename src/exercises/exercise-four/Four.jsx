import { Link } from "react-router-dom";

const Four = () => {
  return (
    <>
      <div className="container">
        <Link to={'/'} className="return">Return to home</Link>
        <div className={"exercise-title exercise-four"}>
          <h2>Exercise four</h2>
        </div>
      </div>
    </>
  )
}

export default Four;