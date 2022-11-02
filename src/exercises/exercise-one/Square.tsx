import { FunctionComponent } from 'react'

type squareProps = {
  great: string
  subject: string
}

const Square: FunctionComponent<squareProps> = ({great, subject}) => {
  return (
    <div className="square-message">
      {great}, {subject}!
    </div>
  )
}

export default Square;