import { useState } from "react";
import { Link } from "react-router-dom";
import TextInput from "./TextInput";

const Seven = () => {
  const [name, setName] = useState('')
  const [lastname, setLastname] = useState('')
  
  return (
    <>
      <div className="container">
        <Link to={'/'} className="return">Return to home</Link>
        <div className={"exercise-title exercise-seven"}>
          <h2>Exercisen 7: Building A Form</h2>
        </div>
        <TextInput inputName='name' value={name} onChangeValue={event => setName(event.target.value)}/>
        <TextInput inputName='lastname' value={lastname} onChangeValue={event => setLastname(event.target.value)}/>
        <button className="great-button" onClick={() => alert(`Hi! 👋, nice to meet u ${name} ${lastname} ⚛`)}>Greet me! 😁</button>
      </div>
    </>
  )
}

export default Seven;