import React, { useState } from 'react';
import UserData from './Userdata'; // Corrected filename and component name
import AddUser from './Adduser'; // Corrected filename and component name
import EditUserForm from './Edituser'; // Assuming EditUserForm component is in a separate file
import DeleteUser from './Deleteuser'; // Corrected filename and component name

const App = () => {
  // Assuming user state is initialized with some default values
  const [user, setUser] = useState({
    id: 1,
    name: 'John Doe',
    place: 'Some Place',
  });

  return (
    <div>
      <h1>Axios CRUD Operations</h1>
      <UserData />
      <AddUser />
      <EditUserForm user={user} />
      <DeleteUser />
    </div>
  );
};

export default App;
