import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

import UserTable from "./UserTable";
import AddUserForm from "./AddUserForm";
import EditUserForm from "./EditUserForm";
import "bootstrap/dist/css/bootstrap.min.css";

// function App() {

//   const [count,setCount]=useState(0)
//   useEffect(() => {
//     document.title = `You clicked ${count} times`;
//  })
//   return (
//     <div className="App">
//     <p>You clicked <b>{count}</b>times</p>
//     <button className="btn btn-success mr-2"  onClick={()=>setCount(count+1)}>Add</button>
//     <button className="btn btn-danger" onClick={()=>setCount(count-1)}>Remove</button>
//     </div>
//   );
// }

const App = () => {
  // Data
  const usersData = [
    { id: 1, name: "junaid", username: "junaidse0", password: "sdfsdfsd" },
    { id: 2, name: "zohaib", username: "faizanse0", password: "tutyu" },
    { id: 3, name: "umer", username: "arslanse0", password: "werwere" }
  ];

  const initialFormState = { id: null, name: "", username: "",password:"" };

  // Setting state
  const [users, setUsers] = useState(usersData);
  const [currentUser, setCurrentUser] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

  // CRUD operations
  const addUser = user => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = id => {
    setEditing(false);

    setUsers(users.filter(user => user.id !== id));
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);

    setUsers(users.map(user => (user.id === id ? updatedUser : user)));
  };

  const editRow = user => {
    setEditing(true);

    setCurrentUser({ id: user.id, name: user.name, username: user.username,password:user.password });
  };

  return (
    <div className="container">
      <h1 className="mt-5 mb-5 text-success text-center">
        CRUD App with Hooks
      </h1>
      <div className="row">
        <div className="col-sm-6">
          {editing
            ? <div>
                <div className="h4 text-info">Edit user</div>
                <EditUserForm
                  editing={editing}
                  setEditing={setEditing}
                  currentUser={currentUser}
                  updateUser={updateUser}
                />
              </div>
            : <div>
                <div className="h4 text-info">Add user</div>
                <AddUserForm addUser={addUser} />
              </div>}
        </div>
        <div className="col-sm-6">
          <div className="h4 text-info">View users</div>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
};

export default App;
