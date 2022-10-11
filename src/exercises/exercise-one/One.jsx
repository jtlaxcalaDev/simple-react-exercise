import { Link } from "react-router-dom";
import "./One.css"
import Square from "./Square";

const One = () => {
  return(
    <>
      <div className="container">
        <Link to={'/'} className="return">Return to home</Link>
        <div className="exercise-title exercise-one">
          <h2 className="title-exercise">Exercise 1: Hello World!</h2>
          <Square message="Hello, World!" />
        </div>
      </div>
      
    </>
  )
}

export default One;