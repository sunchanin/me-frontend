import React, { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/users`);
    return res.data;
  };

  useEffect(() => {
    getUsers().then((res) => {
      setUsers(res);
    });
  }, []);

  useEffect(() => {
    console.log(users);
  }, [users]);

  return (
    <>
      {users.length > 0 && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </>
  );
}
