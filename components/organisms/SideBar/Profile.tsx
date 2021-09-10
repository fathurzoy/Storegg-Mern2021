import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { JWTPayloadTypes, UserTypes } from "../../../services/data-types";
import jwtDecode from "jwt-decode";

const Profile = () => {
  const [user, setUser] = useState({
    avatar: "",
    name: "",
    email: "",
  });

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      const jwtToken = atob(token); //atob ugly to beautifull
      const payload: JWTPayloadTypes = jwtDecode(jwtToken);
      // console.log("jwtToken", payload);
      const userFromPayload: UserTypes = payload.player;
      setUser(userFromPayload);
      // console.log("user", userFromPayload);
    }
  }, []);

  return (
    <div className="user text-center pb-50 pe-30">
      <img
        src={user.avatar}
        alt="profile"
        width="90"
        height="90"
        className="img-fluid mb-20 "
        style={{
          objectFit: "cover",
          borderRadius: "100%",
          width: "90px",
          height: "90px",
        }}
      />
      <h2 className="fw-bold text-xl color-palette-1 m-0">{user.name}</h2>
      <p className="color-palette-2 m-0">{user.email}</p>
    </div>
  );
};

export default Profile;
