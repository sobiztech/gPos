import React, { useState } from "react";
import "./adproduct.css";
import { FaRegEdit, FaTrash, FaEye, FaPlus } from "react-icons/fa";
import Button from "@mui/material/Button";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  MenuItem,
  Modal,
  TextField,
  Typography
} from "@mui/material";
import { ActiveStatus } from "./AddProductElement";
function AddProduct() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    border: "2px solid #fff",
    boxShadow: 24,
    p: 0,
    m: 1,
    "& .MuiTextField-root": { m: 1, width: "31ch" }
  };
  const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];
    const [currency, setCurrency] = useState('EUR');
  
    const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
      setCurrency(event.target.value);
    };


    return (
    <div className="addproduct">
      <div className="addside"></div>
      <div className="addside_right">
        <div className="add_product_card">
          <div className="card_header">
            <Button
              onClick={handleOpen}
              className="btn"
              variant="contained"
              color="success"
            >
              <FaPlus />
              Add Product
            </Button>
          </div>
          <div className="card_body">
            <table className="product_table">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>price</th>
                  <th>qty</th>
                  <th>seria No</th>
                  <th>status</th>
                  <th>info</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>01</td>
                  <td>Chees Kothtu</td>
                  <td>300.00</td>
                  <td>08</td>
                  <td>0011010102</td>
                  <ActiveStatus>active</ActiveStatus> 
                  <td>
                    <Button className="btn" variant="contained" color="success">
                      <FaEye />
                    </Button>
                    <Button
                      className="btn"
                      variant="contained"
                      color="secondary"
                    >
                      <FaRegEdit />
                    </Button>
                    <Button className="btn" variant="contained" color="error">
                      <FaTrash />
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>01</td>
                  <td>Chees Kothtu</td>
                  <td>300.00</td>
                  <td>08</td>
                  <td>0011010102</td>
                  <td>active</td>
                  <td>
                    <Button className="btn" variant="contained" color="success">
                      <FaEye />
                    </Button>
                    <Button
                      className="btn"
                      variant="contained"
                      color="secondary"
                    >
                      <FaRegEdit />
                    </Button>
                    <Button className="btn" variant="contained" color="error">
                      <FaTrash />
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} component="form" noValidate autoComplete="off">
          <Card sx={{ maxWidth: 600 }}>
            <CardContent>
              <div>
                <TextField
                  id="outlined-password-input"
                  label="Name"
                  type="text"
                />
                <TextField
                  id="outlined-password-input"
                  label="BarCode"
                  type="text"
                />
                <TextField
                  id="outlined-password-input"
                  label="Price"
                  type="text"
                />
                <TextField
                  id="outlined-password-input"
                  label="QTY"
                  type="text"
                />
                <TextField
                  id="outlined-password-input"
                  label="catogory"
                  type="text"
                />
                <TextField
                  id="outlined-select-currency"
                  select
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
              </div>
            </CardContent>
            <CardActions>
              <Button variant="contained" color="primary">
                Add
              </Button>
            </CardActions>
          </Card>
        </Box>
      </Modal>
    </div>
  );
}

export default AddProduct;
