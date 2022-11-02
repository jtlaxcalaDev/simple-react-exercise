import { FC } from 'react';
import './Three.css'

interface Props {
  buttonText: string
  alertMessage: string
}

const CustomButton: FC<Props> = ( props ) => {
  return (
    <button className="button-alert" onClick={() => {alert(props.alertMessage)}}>
      {props.buttonText}
    </button>
  )
}

export default CustomButton;