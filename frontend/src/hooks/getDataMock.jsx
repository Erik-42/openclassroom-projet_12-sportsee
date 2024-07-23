// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import { UserInfoSanitized } from '../sanitized/userInfoSanitized';

// let mockDataUrl = 'frontend/src/mock/dataMock.json'

// export function useGetData() {
//   const [userInfos, setUserInfos] = useState(new UserInfoSanitized());
//   const [userActivity, setUserActivity] = useState(null);
//   const [userSession, setUserSession] = useState(null);
//   const [userPerformance, setUserPerformance] = useState(null);
  
//   const {userId}=useParams()
  
//   useEffect(() => {
//     async function fetchUserData() {
//       try {
//         const response = await axios.get(mockDataUrl);
//         setUserInfos(new UserInfoSanitized(response.data.data));
//       } catch (error) {
//         console.error('Error de récupération des user data:', error);
//       }
//     }

//     fetchUserData();
//   }, [userId]);

//   useEffect(() => {
//     async function fetchUserData() {
//       try {
//         const response = await axios.get(mockDataUrl);
//         setUserActivity(response.data.data);
//       } catch (error) {
//         console.error('Error de récupération des user data:', error);
//       }
//     }

//     fetchUserData();
//   }, [userId]);

//   useEffect(() => {
//     async function fetchUserData() {
//       try {
//         const response = await axios.get(mockDataUrl);
//         setUserSession(response.data.data);
//       } catch (error) {
//         console.error('Error de récupération des user data:', error);
//       }
//     }

//     fetchUserData();
//   }, [userId]);

//   useEffect(() => {
//     async function fetchUserData() {
//       try {
//         const response = await axios.get(mockDataUrl);
//         setUserPerformance(response.data.data);
//       } catch (error) {
//         console.error('Error de récupération des user data:', error);
//       }
//     }

//     fetchUserData();
//   }, [userId]);

//   return { userInfos, userActivity,userSession, userPerformance };
// }

import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { UserInfoSanitized } from '../sanitized/userInfoSanitized';

const mockDataUrl = '/dataMock.json';

export function useGetData() {
  const [userInfos, setUserInfos] = useState(new UserInfoSanitized());
  const [userActivity, setUserActivity] = useState(null);
  const [userSession, setUserSession] = useState(null);
  const [userPerformance, setUserPerformance] = useState(null);
  
  const { userId } = useParams();
  
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(mockDataUrl);
        const data = response.data;
        const userData = data[userId];
        
        if (userData) {
          setUserInfos(new UserInfoSanitized(userData.userInfos));
          setUserActivity(userData.userActivity);
          setUserSession(userData.userSession);
          setUserPerformance(userData.userPerformance);
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
