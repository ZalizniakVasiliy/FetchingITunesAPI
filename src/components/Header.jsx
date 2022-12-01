import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "end",
        padding: 0,
        paddingRight: "16px",
        paddingLeft: "16px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexShrink: 0,
          width: "100px",
        }}
      />
      <List
        sx={{
          display: "flex",
          alignItems: "flex-start",
          width: "100%",
          fontSize: "14px",
          padding: 0,
          paddingRight: "32px",
        }}
      >
        <ListItem>Artist</ListItem>
        <ListItem>Track</ListItem>
        <ListItem>Collection</ListItem>
        <ListItem>Genre</ListItem>
      </List>
    </div>
  );
};

export default Header;