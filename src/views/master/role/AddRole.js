import React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  FormControlLabel,
  Switch,
  TextField
} from "@mui/material";
import HeaderAdd from "../../../components/table/HeaderAdd";

function AddRole() {
  return (
    <div style={{ padding: "20px" }}>
      <Card sx={{ maxWidth: "100%" }}>
      <HeaderAdd btn="CANCEL" name="ADD ROLE" to="/role"/>
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
              <TextField id="outlined-search" label="Role Name" type="text" />
            </div>
            <div>
              <TextField
                id="outlined-search"
                label="Role Discription"
                type="text"
                multiline
              />
            </div>
            <div>
              <Card sx={{ maxWidth: "100%", m: 1 }}>
                <CardHeader
                  title="Permissions"
                  subheader="this role have what type of permissions"
                />
                <CardContent>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns:
                        "repeat(auto-fit, minmax(150px, 1fr))",
                      gridColumnGap: "2em",
                      padding: "10px"
                    }}
                  >
                    <FormControlLabel
                      value="end"
                      control={<Switch color="primary" />}
                      label="AdminDevelop"
                      labelPlacement="end"
                    />
                    <FormControlLabel
                      value="end"
                      control={<Switch color="primary" />}
                      label="Admip"
                      labelPlacement="end"
                    />
                    <FormControlLabel
                      value="end"
                      control={<Switch color="primary" />}
                      label="AdminDevelop"
                      labelPlacement="end"
                    />
                    <FormControlLabel
                      value="end"
                      control={<Switch color="primary" />}
                      label="AdmisdfnDevelop"
                      labelPlacement="end"
                    />
                    <FormControlLabel
                      value="end"
                      control={<Switch color="primary" />}
                      label="AdminDevelop"
                      labelPlacement="end"
                    />
                    <FormControlLabel
                      value="end"
                      control={<Switch color="primary" />}
                      label="AdmisdfnDevelop"
                      labelPlacement="end"
                    />
                  </div>
                </CardContent>
              </Card>
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

export default AddRole;
