import jwtDecode from "jwt-decode";
import React from "react";
import SideBar from "../../../components/organisms/SideBar";
import TransactionContent from "../../../components/organisms/TransactionContent";
import { JWTPayloadTypes, UserTypes } from "../../../services/data-types";

const Transaction = () => {
  return (
    // <!-- Transactions -->
    <section className="transactions overflow-auto">
      <SideBar activeMenu="transactions" />
      <TransactionContent />
    </section>
  );
};

export default Transaction;

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
