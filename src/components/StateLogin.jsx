import { useState } from 'react';

export default function StateLogin() {
     const [enteredValues, setEnteredValues] = useState({
    email: '',
    password: ''
  });

  function handleInputChange(identifier, value) {
    setEnteredValues(prevValues => ({
      ...prevValues,
      [identifier]: value
    }));
  }
    return (

    )
}