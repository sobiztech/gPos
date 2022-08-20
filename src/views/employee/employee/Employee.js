import React from "react";
import { Route, Routes } from "react-router-dom";
import StickyHeadTable from "../../../components/table/StickyHeadTable";
import { EmployeeHeader, rows } from "../../../data/Data";
function Employee() {
  return (
    <>
      
            <StickyHeadTable employeeheader={EmployeeHeader} rows={rows} />
        
    </>
  );
}

export default Employee;
