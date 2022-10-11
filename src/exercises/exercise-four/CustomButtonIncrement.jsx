import './Four.css'

const CustomButtonIncrement = ({onClickedButton}) => {
  return (
    <>
      <button className="button-count" onClick={onClickedButton}>
        click me to increment ✅
      </button>
    </>
  )
}

export default CustomButtonIncrement;