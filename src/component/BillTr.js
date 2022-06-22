import React from "react";
import { Td, Tr, Trash } from "./BillTrElements";

function BillTr() {
  return (
    <Tr>
      <Td p="5" wd="40">
        Blue shirt wefasfas
      </Td>
      <Td position="center" wd="25">
        500.00
      </Td>
      <Td position="center" wd="5" pointer="pointer">
        20
      </Td>
      <Td position="right" wd="25">
        20000.00
      </Td>
      <Td position="center" wd="5">
        <Trash />
      </Td>
    </Tr>
  );
}

export default BillTr;
