import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import './Two.css'


type Props = {
  message: string
}

const Two: FunctionComponent<Props> = ( props /* : Props (needed?)*/ ) => {

  function handleAlert(): any {
    alert(props.message)
  }

  return (
    <>
      <div className="container">
        <Link to={'/'} className="return">Return to home</Link>
        <div className={"exercise-title exercise-two"}>
          <h2>2 : Capturing User Clicks</h2>
        </div>
        <div className="button-events">
          <button className="button-alert" onClick={handleAlert}>
            Click me! 😉
          </button>
        </div>
      </div>
    </>
  )
}

export default Two;