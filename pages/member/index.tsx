import React from "react";
import OverviewContent from "../../components/organisms/OverviewContent";
import SideBar from "../../components/organisms/SideBar";

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
