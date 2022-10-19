import React, { isValidElement, useState } from "react";
import styled from "styled-components";

import Button from "../../UI/Button/Button";
import styles from "./CourseInput.module.css";

// const FormControl = styled.div`
//   margin: 0.5rem 0;

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//         /* Changes the css if user input is invalid */
//     color: ${props => (props.invalid ? 'red' : 'black')}
//   }

//   & input {
//     display: block;
//     width: 100%;
//     /* Changes the css if user input is invalid */
//     border: 1px solid ${props => (props.invalid ? "red" : "#ccc")};
//     background: ${props => (props.invalid ? "#ffd7d7" : "transparent" )};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }
// `;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  // useState for invalid user input

  const [isValid, SetIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    // trim checks for white space when inputted
    // reset error colors if input is valid
    if (event.target.value.trim().length > 0) {
      SetIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    // checks if user input is empty
    // enteredValue is the prev state for the user input form (should be empty)
    if (enteredValue.length === 0) {
      return SetIsValid(false);
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* connects css styles to div by taking class names from the css file */}
      <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div >
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
