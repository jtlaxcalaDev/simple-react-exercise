import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import './Five.css'

type animal = 'dog'| 'cat' | 'chicken' | 'cow' | 'sheep' | 'horse'

interface IAnimal {
  id: number
  name: animal
}

const Five: FunctionComponent = () => {

  const animalList: IAnimal[] = [
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

  return (
    <>
      <div className="container">
        <Link to={'/'} className="return">Return to home</Link>
        <div className={"exercise-title exercise-five"}>
          <h2>Exercise 5 : Mapping Through A List And Rendering</h2>
        </div>
        <ul className="animals-container">
          {
            animalList.map(animal => (
              <li key={animal.id} className="animal-item">
                {animal.name}
              </li>
            ) )
          }
        </ul>
      </div>
    </>
  )
}

export default Five;