import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Autocomplete, Button, CardActions } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function AddForm() {
  const top100Films = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
    { label: "The Dark Knight", year: 2008 },
    { label: "12 Angry Men", year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: "Pulp Fiction", year: 1994 },
    {
      label: "The Lord of the Rings: The Return of the King",
      year: 2003
    }
  ];
  const textfield = [
    {
      id: "productName",
      lable: "product",
      type: "text",
      autoComplete: "off",
      palceholder: "pName",
      field: "input"
    },
    {
      id: "Price",
      lable: "price",
      type: "number",
      autoComplete: "off",
      field: "input"
    },
    {
      id: "product",
      lable: "product",
      type: "text",
      autoComplete: "off",
      palceholder: "pName",
      field: "input"
    },
    {
      id: "product2",
      lable: "product",
      type: "text",
      autoComplete: "off",
      field: "aautocomplete",
      options: top100Films
    }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <Card sx={{ maxWidth: "100%" }}>
        <CardContent>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "40%", minWidth: "60ch" }
            }}
            noValidate
            autoComplete="off"
            style={{ maxWidth: "100%", padding: "20px" }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "auto auto" }}>
              {textfield.map((textfield) => {
                if (textfield.field === "input") {
                  return (
                    <TextField
                      id={textfield.id}
                      label={textfield.lable}
                      type={textfield.type}
                      autoComplete={textfield.autoComplete}
                      placeholder={textfield.palceholder}
                      key={textfield.id}
                    />
                  );
                } else {
                  return (
                    <Autocomplete
                      key={textfield.id}
                      id={textfield.id}
                      options={textfield.options}
                      renderInput={(params) => (
                        <TextField {...params} label={textfield.lable} />
                      )}
                    />
                  );
                }
              })}
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
