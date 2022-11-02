import { FunctionComponent } from 'react'
import './Four.css'

interface Props {
  onClickedButton: () => void
}

const CustomButtonIncrement: FunctionComponent<Props> = ({onClickedButton}) => {
  return (
    <>
      <button className="button-count" onClick={onClickedButton}>
        click me to increment ✅
      </button>
    </>
  )
}

export default CustomButtonIncrement;