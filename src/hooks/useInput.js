import { useState } from "react";

export function useInput(defaultValue, validationFn) {
  const [enteredValue, setEnteredValue] = useState(defaultValue);
  const [didEdit, setEdidEdit] = useState(false);

  const valueIsValid = validationFn(enteredValue);

  function handleInputChange(event) {
    setEnteredValue(event.target.value);
    setEdidEdit(false);
  }

  function handleInputBlur() {
    setEdidEdit(true);
  }

  return {
    value: enteredValue,
    handleInputBlur,
    handleInputChange,
    hasError: didEdit && !valueIsValid,
  };
}
