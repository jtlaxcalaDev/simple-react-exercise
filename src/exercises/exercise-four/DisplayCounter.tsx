import { FC } from 'react'
import './Four'

interface countProps {
  count: number
}

const DisplayCounter: FC<countProps> = ({ count }) => {
  return (
    <div className="counter-container">{count}</div>
  )
}

export default DisplayCounter;