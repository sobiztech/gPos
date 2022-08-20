import {
  Accordion,
  AccordionSummary,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function ShowRole() {
  return (
    <div style={{ padding: "20px" }}>
      <Card sx={{ maxWidth: "100%" }}>
        <CardHeader title="Role/Add Role" />
        <CardActions sx={{ p: 2 }}>
          <Button variant="contained">BACK</Button>
        </CardActions>
        <CardContent>
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

export default ShowRole;
