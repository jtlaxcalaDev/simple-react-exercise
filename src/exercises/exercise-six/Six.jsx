import { Link } from "react-router-dom";
import AnimalRow from "./AnimalRow";
import './Six.css'

const Six = () => {

  const animals = ['dog 🐶', 'cat 🐱', 'chicken 🐔', 'cow 🐄', 'sheep 🐑', 'horse 🐴']

  return (
    <>
      <div className="container">
        <Link to={'/'} className="return">Return to home</Link>
        <div className={"exercise-title exercise-six"}>
          <h2>Exercise 6: Mapping Through A List And Rendering (With A Custom Component)</h2>
        </div>
        <ul className="animals-container">
          {
            animals.map(animal => (
              <AnimalRow key={animal.index} name={animal} />
            ) )
          }
        </ul>
      </div>
    </>
  )
}

export default Six;