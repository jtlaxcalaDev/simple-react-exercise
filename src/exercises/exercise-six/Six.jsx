import { Link } from "react-router-dom";

const Six = () => {
  return (
    <>
      <div className="container">
        <Link to={'/'} className="return">Return to home</Link>
        <div className={"exercise-title exercise-six"}>
          <h2>Exercise six</h2>
        </div>
      </div>
    </>
  )
}

export default Six;