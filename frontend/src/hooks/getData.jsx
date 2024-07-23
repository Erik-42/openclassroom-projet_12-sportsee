import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { UserActivitySanitized, UserAverageSessionSanitized, UserMainDataSanitized, UserPerformanceSanitized } from '../sanitized/userInfoSanitized';

export function useGetData() {
  const [userInfos, setUserInfos] = useState(new UserMainDataSanitized());
  const [userActivity, setUserActivity] = useState(new UserActivitySanitized());
  const [userSession, setUserSession] = useState(new UserAverageSessionSanitized());
  const [userPerformance, setUserPerformance] = useState(new UserPerformanceSanitized());

 const {userId}=useParams()

  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await axios.get(`http://localhost:3000/user/${userId}`);
        setUserInfos(new UserMainDataSanitized(response.data.data));
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

