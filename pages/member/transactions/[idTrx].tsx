import jwtDecode from "jwt-decode";
import React from "react";
import TransactionDetailContent from "../../../components/organisms/TransactionDetailContent";
import { JWTPayloadTypes, UserTypes } from "../../../services/data-types";

const TransactionDetail = () => {
  return (
    // <!-- Transactions Detail -->
    <section className="transactions-detail overflow-auto">
      <TransactionDetailContent />
    </section>
  );
};

export default TransactionDetail;

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
  // console.log("jwtToken:", jwtToken);
  const payload: JWTPayloadTypes = jwtDecode(jwtToken);
  // console.log("payload", payload);
  const userFromPayload: UserTypes = payload.player;

  return {
    props: {
      user: userFromPayload,
    },
  };
}
