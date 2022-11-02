import { Link } from "react-router-dom";
import AnimalRow from "./AnimalRow";
import { IAnimal } from "./Animal";
import './Six.css'
import { FunctionComponent } from "react";

export const animalList: IAnimal[] = [
  {
    id: 1,
    name: 'dog', 
  },
  {
    id: 2,
    name: 'cat', 
  },
  {
    id: 3,
    name: 'chicken', 
  },
  {
    id: 4,
    name: 'cow', 
  },
  {
    id: 5,
    name: 'sheep', 
  },
  {
    id: 6,
    name: 'horse'
  }
]

const Six: FunctionComponent = () => {
  
  return (
    <>
      <div className="container">
        <Link to={'/'} className="return">Return to home</Link>
        <div className={"exercise-title exercise-six"}>
          <h2>Exercise 6: Mapping Through A List And Rendering (With A Custom Component)</h2>
        </div>
        <div className="animals-container">
          {
            animalList.map(animal => (
              <AnimalRow key={animal.id} name={animal.name} />
            ) )
          }
        </div>
      </div>
    </>
  )
}

export default Six;