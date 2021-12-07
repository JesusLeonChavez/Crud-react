import React, { useState } from 'react';
import UserTable from './components/UserTable';
import AddUserForm from './components/AddUserForm';
import EditUserForm from './components/EditUserForm';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const usersData = [
    { id: uuidv4(), name: 'Lucyd', username: 'LucydLeon' },
    { id: uuidv4(), name: 'Sofia', username: 'SofiaLeon' },
    { id: uuidv4(), name: 'Varyana', username: 'VaryanaRaskov' },
    { id: uuidv4(), name: 'Leónidas', username: 'GatoSolitario' },
    { id: uuidv4(), name: 'Kioshi', username: 'ElJuasJuas' },
    { id: uuidv4(), name: 'Diego', username: 'ElChikistrikis' },
    { id: uuidv4(), name: 'Asis', username: 'ElRisas' },
  ]

  //state
  const [users, setUsers] = useState(usersData);

  //add users
  const addUser = (user) => {
    user.id = uuidv4()
    setUsers([
      ...users,
      user
    ]);
  }

  //delete users
  const deleteUser = (id) => {
    const arrayFiltrado = users.filter(user => user.id !== id);

    setUsers(arrayFiltrado);
  }

  //edit users
  const [editing, setEditing] = useState(false);

  const [currentUser, setCurrentUser] = useState({
    id: null,
    name: '',
    username: '',
  });

  const editRow = (user) => {
    setEditing(true);

    setCurrentUser({
      id: user.id,
      name: user.name,
      username: user.username
    });
  }

  const updateUser = (id, updateUser) => {
    setEditing(false);

    setUsers(users.map(user => (user.id == id ? updateUser : user)))
  }

  return (
    <div className="container">
      <h1>CRUD Register</h1>
      <div className="flex-row">
        <div className="flex-large">
          
          {
            editing ? (
              <div>
                <h2>Edit users</h2>
                <EditUserForm 
                  currentUser={currentUser}
                  updateUser={updateUser}
                />
              </div>
            ) : (
              <div>
                <h2>Add users</h2>
                <AddUserForm addUser={addUser}/>
              </div>
            )
          }
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable 
            users={users} 
            deleteUser={deleteUser}
            editRow={editRow}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
