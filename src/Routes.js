import React from "react";
import AddForm from "./components/form/AddForm";
import Employee from "./views/employee/employee/Employee";
import Role from "./views/employee/role/Role";
import StickyHeadTable from "./components/table/StickyHeadTable";
import AddRole from "./views/employee/role/AddRole";
import ShowRole from "./views/employee/role/ShowRole";


const routes = [
  //   { path: '/', exact: true, name: 'Home' },
  { path: "/employee", exact: true, name: "employee", element: <Employee /> },
  {
    path: "/employee/add-Employee",
    name: "Add-Employee",
    element: <AddForm />
  },
  { path: "/role", name: "Role", exact: true, element: <Role /> },
  { path: "/role/add-role", name: "AddRole", element: <AddRole /> },
  { path: "/role/show-role", name: "ShowRole", element: <ShowRole /> },
  { path: "/add", name: "Add", element: <AddForm /> }
];
export default routes;
