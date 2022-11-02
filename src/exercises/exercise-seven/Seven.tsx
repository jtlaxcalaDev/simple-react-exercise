import {FunctionComponent, useState} from 'react';
import {Link} from 'react-router-dom';
import TextInput from './TextInput';

interface FullName {
  name: string;
  lastName: string;
}

const Seven: FunctionComponent = () => {
  const [fullName, setFullname] = useState<FullName>({
    name: '',
    lastName: '',
  });

  return (
    <>
      <div className='container'>
        <Link to={'/'} className='return'>
          Return to home
        </Link>
        <div className={'exercise-title exercise-seven'}>
          <h2>Exercisen 7: Building A Form</h2>
        </div>
        <TextInput
          inputName='name'
          value={fullName.name}
          onChangeValue={event =>
            setFullname(oldValue => ({
              ...oldValue, 
              name: event.target.value
            }))
          }
        />
        <TextInput
          inputName='lastname'
          value={fullName.lastName}
          onChangeValue={event =>
            setFullname(oldValue => ({
              ...oldValue,
              lastName: event.target.value,
            }))
          }
        />
        <button
          className='great-button'
          onClick={() =>
            alert(
              `Hi! 👋, nice to meet u ${fullName.name} ${fullName.lastName} ⚛`,
            )
          }>
          Greet me! 😁
        </button>
      </div>
    </>
  );
};

export default Seven;
