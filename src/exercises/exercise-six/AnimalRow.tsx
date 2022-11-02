import { FC } from "react"
import { animal, animalIcon } from "./Animal"

interface animalProps {
  name: animal
}

const AnimalRow: FC<animalProps> = ({ name }) => {

  let icon: animalIcon

  switch(name){
    case('dog'):
      icon = '🐶'
      break
    case('cat'):
      icon = '🐱'
      break
    case('chicken'):
      icon = '🐔'
      break
    case('cow'):
      icon = '🐄'
      break
    case('sheep'):
      icon = '🐑'
      break
    case('horse'):
      icon = '🐴'
      break
    default: 
      icon = '🐶'
      break
  }

  return (
    <div className="animal-item">
      {icon} {name}
    </div>
  )
}

export default AnimalRow;