import { Link } from "react-router-dom";
import './Two.css'

const Two = () => {
  return (
    <>
      <div className="container">
        <Link to={'/'} className="return">Return to home</Link>
        <div className={"exercise-title exercise-two"}>
          <h2>2 : Capturing User Clicks</h2>
        </div>
        <div className="button-events">
          <button className="button-alert" onClick={()=>{alert('Thanks for your click 😁')}}>
            Click me! 😉
          </button>
        </div>
      </div>
    </>
  )
}

export default Two;