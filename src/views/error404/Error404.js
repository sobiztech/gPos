import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

export default function Error404() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh"
      }}
    >
      <Container maxWidth="md">
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Typography variant="h1">404</Typography>
          <Typography variant="h6">
            The page you’re looking for doesn’t exist.
          </Typography>
          <Button variant="contained">Back Home</Button>
        </Grid>
      </Container>
    </Box>
  );
}
