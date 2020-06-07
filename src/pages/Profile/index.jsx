import React, { useEffect, useState } from "react";
import ProfileStyle from "./style";
import axios from "axios";
import AuthService from "../../services/auth-service";

const Profile = () => {
  const user = AuthService.getCurrentUser();
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    if (user) {
      const fetchData = async () => {
        let result = await axios.get(`http://localhost:8000/api/auth/me`, {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
          },
        });
        setUserData(result.data);
      };
      fetchData();
    }
  }, []);
  return (
    <ProfileStyle>
      Just some additional info about user...
      <div>
        <p>Name: {userData.name}</p>
        <p>Email: {userData.email}</p>
      </div>
    </ProfileStyle>
  );
};

export default Profile;
