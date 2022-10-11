import './Three.css'

const CustomButton = ({buttonText,alertMessage}) => {
  return (
    <button className="button-alert" onClick={() => {alert(alertMessage)}}>
      {buttonText}
    </button>
  )
}

export default CustomButton;