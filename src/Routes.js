import React from "react";
import AddForm from "./components/form/AddForm";
import Employee from "./views/master/employee/Employee";
import Role from "./views/master/role/Role";
import AddRole from "./views/master/role/AddRole";
import ShowRole from "./views/master/role/ShowRole";
import ShowEmployee from "./views/master/employee/ShowEmployee";
import AddEmployee from "./views/master/employee/AddEmployee";

const routes = [
  { path: "/employee", exact: true, name: "employee", element: <Employee /> },
  {
    path: "/employee/add-Employee",
    name: "Add-Employee",
    element: <AddEmployee />
  }, {
    path: "/employee/show-Employee",
    name: "Show-Employee",
    element: <ShowEmployee />
  },
  { path: "/role", name: "Role", exact: true, element: <Role /> },
  { path: "/role/add-role", name: "AddRole", element: <AddRole /> },
  { path: "/role/show-role", name: "ShowRole", element: <ShowRole /> },
  { path: "/add", name: "Add", element: <AddForm /> }
];
export default routes;
