import React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  MenuItem,
  TextField
} from "@mui/material";
import HeaderAdd from "../../../components/table/HeaderAdd";
function AddEmployee() {
  const employeAddDetail = [
    {
      id: "01",
      lable: "First Name",
      type: "text"
    },
    {
      id: "02",
      lable: "Last Name",
      type: "text"
    },
    {
      id: "03",
      lable: "Sur Name",
      type: "text"
    },
    {
      id: "04",
      lable: "Date Of Birth",
      type: "date",
      defaultValue: "2017-05-24"
    },
    {
      id: "05",
      lable: "Gender",
      type: "gender"
    },
    {
      id: "06",
      lable: "N I C",
      type: "text"
    },
    {
      id: "07",
      lable: "Phone Number",
      type: "Number"
    },
    {
      id: "08",
      lable: "E mail",
      type: "email"
    },
    {
      id: "09",
      lable: "Adress",
      type: "text",
      multiline: "true"
    },
    {
      id: "10",
      lable: "Image",
      type: "file"
    },
    {
      id: "11",
      lable: "Description",
      type: "text",
      multiline: "true"
    }
  ];
  const genders = [
    {
      value: "m",
      label: "Male"
    },
    {
      value: "f",
      label: "Female"
    },
    {
      value: "o",
      label: "Other"
    }
  ];
  const [gender, setgender] = React.useState("m");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setgender(event.target.value);
  };

  return (
    <div style={{ padding: "20px" }}>
      <Card sx={{ maxWidth: "100%" }}>
        <HeaderAdd btn="CANCEL" name="ADD EMPLOYEE" to="/employee" />
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
              {employeAddDetail.map((emp) => {
                if (emp.type === "gender") {
                  return (
                    <TextField
                      id="outlined-select-gender"
                      select
                      label={emp.lable}
                      value={gender}
                      onChange={handleChange}
                      helperText="Please select your gender"
                    >
                      {genders.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  );
                } else {
                  return (
                    <TextField
                      key={emp.id}
                      defaultValue={emp.defaultValue ? emp.defaultValue : ""}
                      label={emp.lable}
                      type={emp.type}
                      multiline={emp.multiline ? emp.multiline : false}
                    />
                  );
                }
              })}
              <TextField
                label="Role Discription"
                type="date"
                defaultValue="2017-05-24"
              />
              <TextField
                id="outlined-select-gender"
                select
                label="Select"
                value={gender}
                onChange={handleChange}
                helperText="Please select your gender"
              >
                {genders.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
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

export default AddEmployee;
