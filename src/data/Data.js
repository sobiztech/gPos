import React from "react";

// employeee

// employee header
export const EmployeeHeader = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "code", label: "ISO\u00a0Code", minWidth: 100 },
  {
    id: "population",
    label: "Population",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US")
  },
  {
    id: "size",
    label: "Size\u00a0(km\u00b2)",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US")
  },
  {
    id: "density",
    label: "Density",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2)
  },
  {
    id: "actionBtn",
    label: "Action",
    align: "center",
    minWidth: 70,
    type: "btn"
  }
];
export const rows = [
  {
    name: "india",
    code: "in",
    population: 1234567,
    size: 153486,
    density: "car"
  },
  {
    name: "india",
    code: "i",
    population: 1234567,
    size: 153486,
    density: "car"
  },
  {
    name: "india",
    code: "n",
    population: 1234567,
    size: 153486,
    density: "car"
  },
  {
    name: "india",
    code: "inm",
    population: 1234567,
    size: 153486,
    density: "car"
  },
  {
    name: "india",
    code: "ink",
    population: 1234567,
    size: 153486,
    density: "car"
  },
  {
    name: "india",
    code: "ign",
    population: 1234567,
    size: 153486,
    density: "car"
  },
  {
    name: "india",
    code: "ine",
    population: 1234567,
    size: 153486,
    density: "car"
  },
  {
    name: "india",
    code: "ifn",
    population: 1234567,
    size: 153486,
    density: "car"
  },
  {
    name: "india",
    code: "it",
    population: 1234567,
    size: 153486,
    density: "car"
  },
  {
    name: "india",
    code: "int",
    population: 1234567,
    size: 153486,
    density: "car"
  },
  {
    name: "india",
    code: "iny",
    population: 1234567,
    size: 153486,
    density: "car"
  }
];
