import { Accordion } from "@mui/material";
import React from "react";
import Jesus from "../assets/jesus.png";

function DetailBox(props) {
  const myStyle = {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    minHeight: "48px",
    alignItems: "center",
    padding: "0 16px",
    color: "inherit"
  };
  const imageContainer = {
    width: "auto",
    height: "100px"
  };
  const image = {
    width: "auto",
    height: "100px",
    objectFit: "contain",
    padding: "10px"
  };
  return (
    <Accordion>
      <div style={myStyle}>
        <div style={{ width: "20%", flexShrink: 0 }}>
          {props.title ? props.title : "No Title"}
        </div>
        {props.image ? (
          <div style={imageContainer}>
            {props.image ? (
              <img style={image} src={Jesus} alt="image" />
            ) : (
              <img style={image} src={props.image} alt="image" />
            )}
          </div>
        ) : (
          <div> {props.detail ? props.detail : "No Detail"}</div>
        )}
      </div>
    </Accordion>
  );
}

export default DetailBox;
