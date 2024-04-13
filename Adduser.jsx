import React, { useState } from 'react';

function AddUser() {
  const [userContent, setUserContent] = useState('');
  const [email, setEmail] = useState('');
  const [id, setId] = useState('');
  const [jobRole, setJobRole] = useState('');
  const [employeeId, setEmployeeId] = useState('');
  const [showContent, setShowContent] = useState(false);

  const handleAddUser = () => {
    setShowContent(true); // Set showContent to true when button is clicked
  };

  return (
    <div>
      <h2>Add User</h2>
      <input
        type="text"
        value={userContent}
        onChange={(e) => setUserContent(e.target.value)}
        placeholder="Enter user name"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
      />
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="Enter ID"
      />
      <input
        type="text"
        value={jobRole}
        onChange={(e) => setJobRole(e.target.value)}
        placeholder="Enter job role"
      />
      <input
        type="text"
        value={employeeId}
        onChange={(e) => setEmployeeId(e.target.value)}
        placeholder="Enter employee ID"
      />
      <button onClick={handleAddUser}>Add User</button>
      {showContent && ( // Render userContent only if showContent is true
        <div>
          <p>User Content: {userContent}</p>
          <p>Email: {email}</p>
          <p>ID: {id}</p>
          <p>Job Role: {jobRole}</p>
          <p>Employee ID: {employeeId}</p>
        </div>
      )}
    </div>
  );
}

export default AddUser;
