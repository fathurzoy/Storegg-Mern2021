import Link from "next/link";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { JWTPayloadTypes, UserTypes } from "../../../services/data-types";
import { useRouter } from "next/dist/client/router";

// interface AuthProps {
//   isLogin?: boolean;
// }

// const Auth = (props: Partial<AuthProps>) => {
const Auth = () => {
  // const {isLogin} = props;
  const [isLogin, setIslogin] = useState(false);
  const [user, setUser] = useState({
    avatar: "",
  });
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      const jwtToken = atob(token); //atob ugly to beautifull
      const payload: JWTPayloadTypes = jwtDecode(jwtToken);
      // console.log("jwtToken", payload);
      const userFromPayload: UserTypes = payload.player;
      // const IMG = process.env.NEXT_PUBLIC_IMG;
      // userFromPayload.avatar = `${IMG}/${userFromPayload.avatar}`;
      setIslogin(true);
      setUser(userFromPayload);
      console.log("user", userFromPayload);
    }
  }, []);

  const onLogout = () => {
    Cookies.remove("token");
    router.push("/");
    setIslogin(false);
  };

  if (isLogin) {
    return (
      <li className="nav-item my-auto dropdown d-flex">
        <div className="vertical-line d-lg-block d-none" />
        <div>
          <a
            className="dropdown-toggle ms-lg-40"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src={user.avatar}
              className="rounded-circle"
              width="40"
              height="40"
              alt=""
            />
          </a>

          <ul
            className="dropdown-menu border-0"
            aria-labelledby="dropdownMenuLink"
          >
            <li>
              <Link href="/member">
                <a className="dropdown-item text-lg color-palette-2">
                  My Profile
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="dropdown-item text-lg color-palette-2">Wallet</a>
              </Link>
            </li>
            <li>
              <Link href="/member/edit-profile">
                <a className="dropdown-item text-lg color-palette-2">
                  Account Settings
                </a>
              </Link>
            </li>
            <li onClick={onLogout}>
              <a className="dropdown-item text-lg color-palette-2">Log Out</a>
            </li>
          </ul>
        </div>
      </li>
    );
  }
  return (
    <li className="nav-item my-auto">
      <Link href="/sign-in">
        <a
          className="btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill"
          role="button"
        >
          Sign In
        </a>
      </Link>
    </li>
  );
};

export default Auth;
