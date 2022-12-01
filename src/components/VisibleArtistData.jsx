import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

const VisibleArtistData = (props) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexGrow: 1,
      }}
    >
      <img
        style={{
          display: "inline-block",
          width: "100px",
          height: "100px",
        }}
        src={props.artistData.artworkUrl100}
        alt="collection cover"
      />
      <List
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          fontSize: "14px",
        }}
      >
        <ListItem>{props.artistData.artistName}</ListItem>
        <ListItem>{props.artistData.trackName}</ListItem>
        <ListItem>{props.artistData.collectionName}</ListItem>
        <ListItem>{props.artistData.primaryGenreName}</ListItem>
      </List>
    </div>
  );
};

export default VisibleArtistData;