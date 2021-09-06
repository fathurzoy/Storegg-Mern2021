import React, { useState } from "react";
import Link from "next/link";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css"; //toast sudah ditaro di _app global
import { toast, ToastContainer } from "react-toastify";
import { setLogin } from "../../../services/auth";
import { useRouter } from "next/dist/client/router";
import jwt_decode from "jwt-decode";
import Cookies from "js-cookie";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const onSubmit = async () => {
    const data = {
      email: email,
      password: password,
    };
    // console.log("data", data);

    if (!email || !password) {
      toast.error("Email dan Password wajib diisi!!");
    } else {
      const response = await setLogin(data);
      if (response.error) {
        toast.error(response.message);
      } else {
        toast.success("Login Berhasil");
        const token = response.data.token;
        // console.log("token: ", token);
        // const user = jwt_decode(token);
        // console.log("user: ", user);
        //*sebelum menyimpan ke cookie kita buat jadi ugly / jelek
        const tokenBase64 = btoa(token); //default dari windows untuk membuat sebuah string menjadi ugly atau beautiful to ugly
        // console.log("tokenBase64", tokenBase64);
        Cookies.set("token", tokenBase64, { expires: 1 });
        // setTimeout(() => {
        //   router.push("/");
        // }, 2000);
        router.push("/");
      }
    }
  };

  return (
    <>
      <h2 className="text-4xl fw-bold color-palette-1 mb-10">Sign In</h2>
      <p className="text-lg color-palette-1 m-0">
        Masuk untuk melakukan proses top up
      </p>
      <div className="pt-50">
        <label
          htmlFor="email"
          className="form-label text-lg fw-medium color-palette-1 mb-10"
        >
          Email Address
        </label>
        <input
          type="email"
          className="form-control rounded-pill text-lg"
          id="email"
          name="email"
          aria-describedby="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className="pt-30">
        <label
          htmlFor="password"
          className="form-label text-lg fw-medium color-palette-1 mb-10"
        >
          Password
        </label>
        <input
          type="password"
          className="form-control rounded-pill text-lg"
          id="password"
          name="password"
          aria-describedby="password"
          placeholder="Your password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div className="button-group d-flex flex-column mx-auto pt-50">
        <button
          type="button"
          className="btn btn-sign-in fw-medium text-lg text-white rounded-pill mb-16"
          onClick={onSubmit}
        >
          Continue to Sign In
        </button>
        {/* <!-- <button type="submit"
            className="btn btn-sign-in fw-medium text-lg text-white rounded-pill mb-16"
            role="button">Continue to Sign In</button> --> */}
        <Link href="/sign-up">
          <a
            className="btn btn-sign-up fw-medium text-lg color-palette-1 rounded-pill"
            role="button"
          >
            Sign Up
          </a>
        </Link>
      </div>
      {/* <ToastContainer/> //toast sudah ditaro di _app global*/}
    </>
  );
};

export default SignInForm;
