import React from "react";
import "./product.css";
import styled from "styled-components";
import jesus from "../assets/jesus.png";

function Product() {
  const Pdiv = styled.div`
    width: ${(props) => props.width}%;
    height: ${(props) => props.height}%;
    display: ${(props) => props.flex};
    flex-direction: ${(props) => props.dir};
    margin-left:${(props) => props.m}px;
    
  `;
  return (
    <div className="product">
      <Pdiv height="100" width="20">
        <img src={jesus} alt="Logo" />
      </Pdiv>
      <Pdiv height="100" width="80" flex="flex" dir="column">
        <Pdiv height="40" width="100" m="2">
          jesus is good man for us
        </Pdiv>
        <Pdiv height="30" width="100" flex="flex" dir="row">
          <Pdiv height="100" width="33.30" m="2">
            jeans
          </Pdiv>
          <Pdiv height="100" width="43.30">
            men
          </Pdiv>
          <Pdiv height="100" width="20.30">
            100
          </Pdiv>
        </Pdiv>
        <Pdiv height="30" width="100" flex="flex" dir="row">
          <Pdiv height="100" width="50" m="2">
            500.00
          </Pdiv>
          <Pdiv height="100" width="50">
            2500.00
          </Pdiv>
        </Pdiv>
      </Pdiv>
    </div>
  );
}

export default Product;
