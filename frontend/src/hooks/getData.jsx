import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { UserActivitySanitized, UserAverageSessionSanitized, UserInfoSanitized, UserPerformanceSanitized } from '../sanitized/userInfoSanitized';

export function useGetData() {
  const [userInfos, setUserInfos] = useState(new UserInfoSanitized());
  const [userActivity, setUserActivity] = useState(new UserActivitySanitized());
  const [userSession, setUserSession] = useState(new UserAverageSessionSanitized());
  const [userPerformance, setUserPerformance] = useState(new UserPerformanceSanitized());

 const {userId}=useParams()

  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await axios.get(`http://localhost:3000/user/${userId}`);
        setUserInfos(new UserInfoSanitized(response.data.data));
      } catch (error) {
        console.error('Error de récupération des user data:', error);
        alert('probleme de connexion avec le serveur')
      }
    }

    fetchUserData();
  }, [userId]);

  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await axios.get(`http://localhost:3000/user/${userId}/activity`);
        setUserActivity(new UserActivitySanitized(response.data.data));
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
        setUserSession(new UserAverageSessionSanitized(response.data.data));
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
        setUserPerformance(new UserPerformanceSanitized(response.data.data));
      } catch (error) {
        console.error('Error de récupération des user data:', error);
      }
    }

    fetchUserData();
  }, [userId]);

  return { userInfos, userActivity,userSession, userPerformance };
}

