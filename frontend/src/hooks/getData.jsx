import { useState, useEffect } from 'react';
import axios from 'axios';

export function getData(userId) {
  const [data, setData] = useState(null);
 

  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await axios.get(`http://localhost:3000/user/${userId}`);
        setData(response.data.data);
      } catch (error) {
        console.error('Error de récupération des user data:', error);
      }
    }

    fetchUserData();
  }, [userId]);

  return { data };
}

