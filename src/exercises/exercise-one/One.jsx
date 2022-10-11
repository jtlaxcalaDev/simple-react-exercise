import { Link } from "react-router-dom";
import "./One.css"

const One = () => {
  return(
    <>
      <div className="container">
        <Link to={'/'} className="return">Return to home</Link>
        <div className="exercise-title exercise-one">
          <h2 className="title-exercise">Exercise one</h2>
        </div>
      </div>
      
    </>
  )
}

export default One;