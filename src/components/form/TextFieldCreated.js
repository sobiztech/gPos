import { MenuItem, TextField } from "@mui/material";
import React from "react";

function TextFieldCreated() {
  const currencies = [
    {
      value: "USD",
      label: "$"
    },
    {
      value: "EUR",
      label: "€"
    },
    {
      value: "BTC",
      label: "฿"
    },
    {
      value: "JPY",
      label: "¥"
    }
  ];
  const textfield = [
    {
      id: "outlined-search",
      label: "Search field",
      type: "text"
    },
    {
      id: "outlined-search",
      label: "Search field",
      type: "text"
    },
    {
      id: "outlined-search",
      label: "select",
      type: "text",
      drop: [
        {
          value: "USD",
          label: "$"
        },
        {
          value: "EUR",
          label: "€"
        },
        {
          value: "BTC",
          label: "฿"
        },
        {
          value: "JPY",
          label: "¥"
        }
      ]
    }
  ];
  const [currency, setCurrency] = React.useState("EUR");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrency(event.target.value);
  };
  const lithu = true;
  return (
    <>
      {lithu ? (
        <TextField
          id="outlined-select-currency"
          select={true}
          label="Select"
          value={currency}
          onChange={handleChange}
          helperText="Please select your currency"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      ) : (
        <TextField id="outlined-search" label="Search field" type="text" />
      )}
    </>
  );
}

export default TextFieldCreated;
