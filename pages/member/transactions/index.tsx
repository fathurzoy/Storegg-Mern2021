import React from "react";
import SideBar from "../../../components/organisms/SideBar";
import TransactionContent from "../../../components/organisms/TransactionContent";

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
