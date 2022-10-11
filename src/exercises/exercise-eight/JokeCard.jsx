import './Eight.css'

const JokeCard = ({jokeId, question, answer}) => {
  return (
    <div className="joke-card">
      <div className="joke-card-inner">
        <div className="flip-front question-box">
          <div style={{fontSize: '18pt', paddingBottom: '.4em'}}>{jokeId}</div>
          <div style={{color: '#E0E1DD'}}>{question}</div>
        </div>
        <div className="flip-back answer-box">{answer}</div>
      </div>
    </div>
  )
}

export default JokeCard;