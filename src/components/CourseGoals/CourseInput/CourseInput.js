import React, { useState } from 'react';
import Button from '../../UI/Button/Button';
import styled from 'styled-components'

const FormControl = styled.div`
.form-control {
  margin: 0.5rem 0;
}

& label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

& input {
  margin-bottom: 0.5rem;
  display: block;
  width: 100%;
  border: 1px solid ${props => (props.invalid ? 'red' : '#ccc')}
  font: inherit;
  line-height: 1.5rem;
  padding: 0 0.25rem;
  background: ${props => (props.invalid ? 'salmon' : 'transparent')};
}

& input:focus {
  outline: none;
  background: lightcyan;
  border-color: #8b005d;
}
`

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
    if (enteredValue.trim().length > 0) { setIsValid(true) }
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl invalid={!isValid} className={!isValid && 'invalid'}>
        <label>Course Goal</label>
        <input
          type='text'
          onChange={goalInputChangeHandler}
        />
      </FormControl>
      <Button type='submit'>Add Goal</Button>
    </form>
  );
};

export default CourseInput;
