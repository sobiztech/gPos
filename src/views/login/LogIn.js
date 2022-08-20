import React from "react";
import { Grid, Paper, Avatar, TextField, Button } from "@material-ui/core";

const LogIn = () => {
  const paperStyle = {
    padding: 20,
    height: "auto",
    width: 280,
    margin: "150px auto"
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };
  return (
    <Grid align="center">
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          {/* <Avatar style={avatarStyle}></Avatar> */}
          <h2>Sign In to GPOS</h2>
        </Grid>
        <TextField
          label="User Id"
          placeholder="Enter User Id"
          fullWidth
          required
        />
        <TextField
          label="Password"
          placeholder="Enter password"
          type="password"
          fullWidth
          required
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          style={btnstyle}
          fullWidth
        >
          Sign in
        </Button>
      </Paper>
    </Grid>
  );
};

export default LogIn;
