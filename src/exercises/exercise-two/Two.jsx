import { Link } from "react-router-dom";

const Two = () => {
  return (
    <>
      <div className="container">
        <Link to={'/'} className="return">Return to home</Link>
        <div className={"exercise-title exercise-two"}>
          <h2>Exercise two</h2>
        </div>
      </div>
    </>
  )
}

export default Two;