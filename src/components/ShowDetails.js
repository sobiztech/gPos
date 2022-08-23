import React from "react";
import {
  Accordion,
  AccordionSummary,
  Card,
  CardContent,
  Typography
} from "@mui/material";
import HeaderAdd from "./table/HeaderAdd";
function ShowDetails(props) {
  return (
    <div style={{ padding: "20px" }}>
      <Card sx={{ maxWidth: "100%" }}>
        <HeaderAdd
          btn={props.headerButton ? props.headerButton : "nothing"}
          name={props.headerName ? props.headerName : "nothing"}
          to={props.to ? props.to : "/employee"}
        />
        <CardContent>
          <Accordion>
            <AccordionSummary>
              <Typography sx={{ width: "20%", flexShrink: 0 }}>
                Role ID
              </Typography>
              <Typography>001</Typography>
            </AccordionSummary>
          </Accordion>
          <Accordion>
            <AccordionSummary
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: "20%", flexShrink: 0 }}>
                Role ID
              </Typography>
              <Typography>001</Typography>
            </AccordionSummary>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}

export default ShowDetails;
