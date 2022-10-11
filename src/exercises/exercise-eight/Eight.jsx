import { Link } from "react-router-dom";
import jokesList from "./jokes";
import JokeCard from "./JokeCard";
import './Eight.css'

const Eight = () => {
  return (
    <>
      <div className="container">
        <Link to={'/'} className="return">Return to home</Link>
        <div className={"exercise-title exercise-eight"}>
          <h2>Exercise-8-Rendering-JSON</h2>
        </div>

        <div className="jokes-list-container">
          {
            jokesList.map(joke => (
              <JokeCard key={joke.id} jokeId={joke.id} question={joke.question} answer={joke.answer} />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Eight;