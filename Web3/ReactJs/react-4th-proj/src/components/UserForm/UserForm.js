import React, {useState} from "react";
import userform from "./UserForm.module.css";

const UserForm = (props) => {

  const [enteredName, setEnteredName] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const NameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  }
  const AgeChangeHandler = (event) =>  {
    setEnteredAge(event.target.value);
  }

  const SubmitHandler = (event) => {
    event.preventDefault();

    const user = {
      name: enteredName,
      age: enteredAge,
    }

    props.onAddUser(user);
    setEnteredName('');
    setEnteredAge('');
  };

  return (
    <form onSubmit={SubmitHandler}>
      <div>
        <label>Username</label>
        <input 
        type = 'text'
        value = {enteredName}
        onChange = {NameChangeHandler}/>
      </div>
      <div>
        <label>Age(Years)</label>
        <input type="number" 
        value = {enteredAge}
        onChange = {AgeChangeHandler}/>
      </div>
      <button>submit</button>
    </form>
  );
};

export default UserForm;
