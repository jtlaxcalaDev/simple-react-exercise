import { Link } from "react-router-dom";
import CustomButtonIncrement from "./CustomButtonIncrement";
import DisplayCounter from "./DisplayCounter";
import { FunctionComponent, useState } from 'react'

const Four: FunctionComponent = () => {
  
  const [count, setCount] = useState<number>(0)

  return (
    <>
      <div className="container">
        <Link to={'/'} className="return">Return to home</Link>
        <div className={"exercise-title exercise-four"}>
          <h2>Exercise 4 : State and Props</h2>
        </div>
        <DisplayCounter count={count}/>
        <CustomButtonIncrement onClickedButton={() => setCount(count + 1)}/>
      </div>
    </>
  )
}

export default Four;