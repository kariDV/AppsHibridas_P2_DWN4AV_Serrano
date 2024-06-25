import React, { useEffect, useState } from 'react';

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
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
