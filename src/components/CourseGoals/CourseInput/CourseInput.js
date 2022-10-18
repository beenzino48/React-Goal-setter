import React, { isValidElement, useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

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
      <div className={`form-control ${!isValid ? "invalid" : ""}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
