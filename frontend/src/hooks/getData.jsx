import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export function useGetData() {
  const [userInfos, setUserInfos] = useState(null);
  const [userActivity, setUserActivity] = useState(null);
  const [userSession, setUserSession] = useState(null);
  const [userPerformance, setUserPerformance] = useState(null);

 const {userId}=useParams()

  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await axios.get(`http://localhost:3000/user/${userId}`);
        setUserInfos(response.data.data);
      } catch (error) {
        console.error('Error de récupération des user data:', error);
      }
    }

    fetchUserData();
  }, [userId]);

  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await axios.get(`http://localhost:3000/user/${userId}/activity`);
        setUserActivity(response.data.data);
      } catch (error) {
        console.error('Error de récupération des user data:', error);
      }
    }

    fetchUserData();
  }, [userId]);

  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await axios.get(`http://localhost:3000/user/${userId}/average-sessions`);
        setUserSession(response.data.data);
      } catch (error) {
        console.error('Error de récupération des user data:', error);
      }
    }

    fetchUserData();
  }, [userId]);

  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await axios.get(`http://localhost:3000/user/${userId}/performance`);
        setUserPerformance(response.data.data);
      } catch (error) {
        console.error('Error de récupération des user data:', error);
      }
    }

    fetchUserData();
  }, [userId]);

  return { userInfos, userActivity,userSession, userPerformance };
}

