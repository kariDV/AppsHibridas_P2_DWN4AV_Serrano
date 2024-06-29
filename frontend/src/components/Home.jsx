import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [user, setUsers] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:3000/usuario')
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <main>
      <h1>Home</h1>
    </main>
  );
};

export default Home;
