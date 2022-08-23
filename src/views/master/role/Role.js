import React from "react";
import StickyHeadTable from "../../../components/table/StickyHeadTable";
import { EmployeeHeader, rows } from "../../../data/Data";

function Role() {
  return (
    <>
      <StickyHeadTable
        tableHeader={EmployeeHeader}
        tableRows={rows}
        cardHeaderLable="ROLE"
        cardHeaderButton="ADD ROLE"
        to="/role/add-role"
      />
    </>
  );
}

export default Role;
