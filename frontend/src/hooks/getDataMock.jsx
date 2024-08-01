import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { UserActivitySanitized, UserAverageSessionSanitized, UserInfoSanitized, UserPerformanceSanitized } from '../sanitized/userInfoSanitized';

const userInfosMock = '/userInfosMock.json';
const userActivityMock = '/userActivityMock.json';
const userSessionMock = '/userSessionMock.json';
const userPerformanceMock = '/userPerformanceMock.json';


export function useGetData() {
  const [userInfos, setUserInfos] = useState(new UserInfoSanitized());
  const [userActivity, setUserActivity] = useState(new UserActivitySanitized());
  const [userSession, setUserSession] = useState(new UserAverageSessionSanitized());
  const [userPerformance, setUserPerformance] = useState(new UserPerformanceSanitized());
  
  const { userId } = useParams();
  
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(userInfosMock);
        const data = response.data;
        
        if (data) {
          setUserInfos(new UserInfoSanitized(data));

        } else {
          console.error('User data not found in mock data');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }

    fetchData();
  }, [userId]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(userActivityMock);
        const data = response.data;
        
        if (data) {
          setUserActivity(new UserActivitySanitized(data));
        } else {
          console.error('User data not found in mock data');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }

    fetchData();
  }, [userId]);


  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(userSessionMock);
        const data = response.data;
        
        if (data) {
          setUserSession(new UserAverageSessionSanitized(data));
        } else {
          console.error('User data not found in mock data');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }

    fetchData();
  }, [userId]);

    useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(userPerformanceMock);
        const data = response.data;
        
        if (data) {
     
          setUserPerformance(new UserPerformanceSanitized(data));
        } else {
          console.error('User data not found in mock data');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }

    fetchData();
  }, [userId]);

  return { userInfos, userActivity, userSession, userPerformance };
}
