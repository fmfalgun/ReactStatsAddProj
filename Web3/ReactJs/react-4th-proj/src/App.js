import app from './App.module.css';
import Users from './components/Users/Users'
import React, {useState} from 'react';
import UserForm from './components/UserForm/UserForm';

const DummyEntry = [
  {
    id: 0,
    name:'Max',
    age: 31,
  }
]

function App() {

  const [users, setUsers] = useState(DummyEntry);
  const [lastId, setLastId] = useState(0);

  const addUserHandler = (user) => {
    const obj = {
      id:lastId + 1,
      name: user.name,
      age: user.age,
    };
    setLastId(lastId+1);
    setUsers((prev) => {
      return [obj, ...prev];
    });
  };
  
  return (
    <div className={app.App}>
      <UserForm onAddUser={addUserHandler}/>
      <Users items={users}/>
    </div>
  );
}

export default App;
