import {
  Card,
  CardContent,
} from "@mui/material";
import React from "react";
import DetailBox from "../../../components/DetailBox";
import HeaderAdd from "../../../components/table/HeaderAdd";

export default function ShowRole() {
  return (
    <div style={{ padding: "20px" }}>
      <Card sx={{ maxWidth: "100%" }}>
        <HeaderAdd btn="BACK" name="ROLE" />
        <CardContent>
        <DetailBox title="User Name" detail="Good Man"/>
        <DetailBox/>
          
        </CardContent>
      </Card>
    </div>
  );
}


