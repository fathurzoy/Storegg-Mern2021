import React, { useState } from "react";
import cx from "classnames";
import { useRouter } from "next/dist/client/router";

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  const className = {
    label: cx("form-label text-lg fw-medium color-palette-1 mb-10"),
  };

  const onSubmit = () => {
    // console.log("email: ", email);
    // console.log("name: ", name);
    // console.log("password: ", password);
    const userForm = {
      email,
      name,
      password,
    };

    localStorage.setItem("user-form", JSON.stringify(userForm)); //valuenya harus berupa string jadi membuat variabel dulu lalu distringify
    router.push("/sign-up-photo");
  };

  return (
    <>
      <div className="pt-50">
        <label htmlFor="name" className={className.label}>
          Full Name
        </label>
        <input
          type="text"
          className="form-control rounded-pill text-lg"
          id="name"
          aria-describedby="name"
          placeholder="Enter your name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className="pt-30">
        <label htmlFor="email" className={className.label}>
          Email Address
        </label>
        <input
          type="email"
          className="form-control rounded-pill text-lg"
          id="email"
          aria-describedby="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className="pt-30">
        <label htmlFor="password" className={className.label}>
          Password
        </label>
        <input
          type="password"
          className="form-control rounded-pill text-lg"
          id="password"
          aria-describedby="password"
          placeholder="Your password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div className="button-group d-flex flex-column mx-auto pt-50">
        <button
          type="button"
          className="btn btn-sign-up fw-medium text-lg text-white rounded-pill mb-16"
          // href="/sign-up-photo"
          onClick={onSubmit}
        >
          Continue
        </button>
        {/* <!-- <button type="submit" className="btn btn-sign-up fw-medium text-lg text-white rounded-pill mb-16"
                        role="button">Continue</button> --> */}
        <a
          className="btn btn-sign-in fw-medium text-lg color-palette-1 rounded-pill"
          href="/sign-in"
          role="button"
        >
          Sign In
        </a>
      </div>
    </>
  );
};

export default SignUpForm;
