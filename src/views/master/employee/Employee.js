import React from "react";
import StickyHeadTable from "../../../components/table/StickyHeadTable";
import { EmployeeHeader, rows } from "../../../data/Data";
function Employee() {
  return (
    <>
      <StickyHeadTable
        tableHeader={EmployeeHeader}
        tableRows={rows}
        cardHeaderButton="ADD EMPLOYEE"
        cardHeaderLable="EMPLOYEE"
        to="/employee/add-Employee"
      />
    </>
  );
}

export default Employee;
