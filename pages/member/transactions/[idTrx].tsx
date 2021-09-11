import jwtDecode from "jwt-decode";
import React from "react";
import TransactionDetailContent from "../../../components/organisms/TransactionDetailContent";
import {
  HistoryTransactionTypes,
  JWTPayloadTypes,
  UserTypes,
} from "../../../services/data-types";
import { getTransactionDetail } from "../../../services/member";

interface TransactionDetailProps {
  transactionDetail: HistoryTransactionTypes;
}
const TransactionDetail = (props: TransactionDetailProps) => {
  const { transactionDetail } = props;
  // console.log("detail: ", transactionDetail);

  return (
    // <!-- Transactions Detail -->
    <section className="transactions-detail overflow-auto">
      <TransactionDetailContent data={transactionDetail} />
    </section>
  );
};

export default TransactionDetail;

interface getServerSideProps {
  req: {
    cookies: { token: string };
  };
  params: {
    idTrx: string;
  };
}

export async function getServerSideProps({ req, params }: getServerSideProps) {
  // console.log("params: ", params);
  const { idTrx } = params;
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

  const response = await getTransactionDetail(idTrx, jwtToken);
  // console.log("data: ", response);

  return {
    props: {
      transactionDetail: response.data,
    },
  };
}
