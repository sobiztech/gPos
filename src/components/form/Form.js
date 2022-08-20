import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  MenuItem,
  TextField
} from "@mui/material";
import React from "react";

function Form() {
  return (
    <div style={{ padding: "20px" }}>
      <Card sx={{ maxWidth: "100%" }}>
        <CardContent>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "48%", minWidth: "30ch" }
            }}
            noValidate
            autoComplete="off"
            style={{ maxWidth: "100%", padding: "20px" }}
          >
            <div>
              <TextField
                id="outlined-search"
                label="Search field"
                type="text"
              />
              <TextField
                id="outlined-search"
                label="Search field"
                type="text"
              />
            </div>
            <CardActions style={{ display: "flex", justifyContent: "end" }}>
              <Button size="small" variant="contained" color="primary">
                SAVE
              </Button>
            </CardActions>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
}

export default Form;
