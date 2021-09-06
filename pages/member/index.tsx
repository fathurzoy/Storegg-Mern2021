import jwtDecode from "jwt-decode";
import React from "react";
import OverviewContent from "../../components/organisms/OverviewContent";
import SideBar from "../../components/organisms/SideBar";
import { JWTPayloadTypes, UserTypes } from "../../services/data-types";

const Member = () => {
  return (
    // <!-- Overview -->
    <section className="overview overflow-auto">
      <SideBar activeMenu="overview" />
      <OverviewContent />
    </section>
  );
};

export default Member;

interface getServerSideProps {
  req: {
    cookies: { token: string };
  };
}

export async function getServerSideProps({ req }: getServerSideProps) {
  const { token } = req.cookies;
  if (!token) {
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false,
      },
    };
  }
  // console.log("token:", token); //cek di bash

  const jwtToken = Buffer.from(token, "base64").toString("ascii"); //sama seperti atob di client side
  console.log("jwtToken:", jwtToken);
  const payload: JWTPayloadTypes = jwtDecode(jwtToken);
  console.log("payload", payload);
  const userFromPayload: UserTypes = payload.player;
  // const IMG = process.env.NEXT_PUBLIC_IMG;
  // user.avatar = `${IMG}/${userFromPayload.avatar}`;

  return {
    props: {
      user: userFromPayload,
    },
  };
}
