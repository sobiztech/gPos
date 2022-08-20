import React from "react";
import styled from "styled-components";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function HeaderAdd() {
  const Div = styled.div`
    height: 50px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: #bebed7;
  `;
  const mystyle = {
    backgroundColor: "DodgerBlue",
    margin: "0 20px"
  };
  return (
    <Div>
      <div style={{ margin: "0 20px" }}>Employee/Name</div>
      <Link to="/employee/add-Employee">
        <Button variant="contained" style={mystyle} endIcon={<AddBoxIcon />}>
          Add EMPLOYEE
        </Button>
      </Link>
    </Div>
  );
}

export default HeaderAdd;
