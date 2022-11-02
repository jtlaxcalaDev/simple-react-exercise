import { FC } from 'react'
import './Seven.css'

interface InputProps {
  inputName: string
  value: string
  onChangeValue: ( event: any ) => void
}

const TextInput: FC<InputProps> = ({inputName, value, onChangeValue}) => {
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