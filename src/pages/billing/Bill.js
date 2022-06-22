import { Button, TextField } from "@mui/material";
import React from "react";
import BillTr from "../../component/BillTr";
import Product from "../../component/Product";
import "./bill.css";
import { TotalField } from "./BillElement";

function Bill() {
  return (
    <div className="bill">
      <div className="bill_side"></div>
      <div className="bill_right">
        <div className="category">
          <div className="search">
            <input type="text" placeholder="Search" />
            {/* drop box */}
          </div>
          <div className="allProduct">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product /> <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product /> <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
        </div>
        <div className="biling">
          <div className="billing_table">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>U Price</th>
                  <th>Qty</th>
                  <th>price</th>
                  <th>Act</th>
                </tr>
              </thead>
              <tbody>
                <BillTr />
                <BillTr />
              </tbody>
            </table>
          </div>
          <div className="pricing">
            <TotalField bc="#b7e2f3">
              <TextField
                id="outlined-read-only-input"
                label="Total"
                placeholder="Total"
                defaultValue="0"
                InputProps={{
                  readOnly: true
                }}
              />
            </TotalField>
            <TotalField bc="#b7e2f3">
              <TextField
                id="outlined-read-only-input"
                label="Tax"
                placeholder="Tax"
                defaultValue="0"
                InputProps={{
                  readOnly: true
                }}
              />
            </TotalField>
            <TotalField bc="#b7e2f3">
              <TextField
                id="outlined-read-only-input"
                label="Net Total"
                placeholder="Net Total"
                defaultValue="0"
                InputProps={{
                  readOnly: true
                }}
              />
            </TotalField>
            <TotalField bc="#b7e2f3">
              <TextField
                id="outlined-read-only-input"
                label="Discount"
                placeholder="Discount"

                
              />
            </TotalField>
            <TotalField bc="#b7e2f3">
              <TextField
                id="outlined-read-only-input"
                label="cash"
                placeholder="Cash"

               
              />
            </TotalField>
            <TotalField bc="#b7e2f3">
              <TextField
                id="outlined-read-only-input"
                label="Balance"
                placeholder="Balance"
                defaultValue="0"
                InputProps={{
                  readOnly: true
                }}
              />
            </TotalField>
          </div>
          <div className="actions">
          <Button className="sbtb" variant="contained">Cancel</Button>
          <Button className="sbtb" variant="contained">Save</Button>
          <Button className="sbtb" variant="contained">Print</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bill;
