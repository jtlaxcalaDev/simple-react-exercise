import { FunctionComponent } from 'react'
import { Link } from "react-router-dom";
import "./One.css"
import Square from "./Square";

const One: FunctionComponent = () => {
  return(
    <>
      <div className="container">
        <Link to={'/'} className="return">Return to home</Link>
        <div className="exercise-title exercise-one">
          <h2 className="title-exercise">Exercise 1: Hello World!</h2>
          <Square great='Hello' subject='World' />
        </div>
      </div>
      
    </>
  )
}

export default One;