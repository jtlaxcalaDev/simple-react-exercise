import { Link } from "react-router-dom";
import './Five.css'

const Five = () => {

  const animals = ['dog 🐶', 'cat 🐱', 'chicken 🐔', 'cow 🐄', 'sheep 🐑', 'horse 🐴']

  return (
    <>
      <div className="container">
        <Link to={'/'} className="return">Return to home</Link>
        <div className={"exercise-title exercise-five"}>
          <h2>Exercise 5 : Mapping Through A List And Rendering</h2>
        </div>
        <ul className="animals-container">
          {
            animals.map(animal => (
              <li key={animal.index} className="animal-item">
                {animal}
              </li>
            ) )
          }
        </ul>
      </div>
    </>
  )
}

export default Five;