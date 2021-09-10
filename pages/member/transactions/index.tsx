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
  return {
    props: {},
  };
}
