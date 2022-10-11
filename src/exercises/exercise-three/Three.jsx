import { Link } from "react-router-dom";
import CustomButton from "./CustomButton";

const Three = () => {
  return (
    <>
      <div className="container">
        <Link to={'/'} className="return">Return to home</Link>
        <div className={"exercise-title exercise-three"}>
          <h2>Exercise 3 : Custom Component</h2>
        </div>
        <div className="button-events">
          <CustomButton buttonText='1: click me please 1️⃣' alertMessage='Thank you for your click, Im button 1 💙'/>
          <CustomButton buttonText='1: click me please 2️⃣' alertMessage='Thank you for your click, Im button 2 💙💙'/>
          <CustomButton buttonText='3: click me please 3️⃣' alertMessage='Thank you for your click, Im button 3 💙💙💙'/>
        </div>
      </div>
    </>
  )
}

export default Three;