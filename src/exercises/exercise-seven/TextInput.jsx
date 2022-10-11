import './Seven.css'

const TextInput = ({inputName, value, onChangeValue}) => {
  return (
    <div className="input-field-container">
      <label className="field" htmlFor={inputName}>{inputName}: </label>
      <input
        type={'text'}
        className="text-input"
        id={inputName}
        value={value}
        onChange={onChangeValue}
      />
    </div>
  )
}

export default TextInput;