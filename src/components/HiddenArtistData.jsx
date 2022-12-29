import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

const HiddenArtistData = (props) => {
  const msToTime = (duration) => {
    let sec = parseInt((duration / 1000) % 60);
    let min = parseInt((duration / (1000 * 60)) % 60);
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    return `${min}:${sec} min`;
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexGrow: 1,
      }}
    >
      <div style={{ flexShrink: 0, width: "100px" }}></div>
      <List
        sx={{
          display: "flex",
          alignItems: "flex-start",
          width: "100%",
          fontSize: "14px",
        }}
      >
        <ListItem
          sx={{
            flexDirection: "column",
            alignItems: "start",
          }}
        >
          <p style={{ fontSize: "26px" }}>{props.artistData.artistName}</p>
          <b>
            Collection:{" "}
            <span style={{ fontWeight: "normal" }}>
              {props.artistData.collectionName}
            </span>
          </b>
          <b>
            Track Count:{" "}
            <span style={{ fontWeight: "normal" }}>
              {props.artistData.trackCount}
            </span>
          </b>
          <b>
            Price:{" "}
            <span style={{ fontWeight: "normal" }}>
              {props.artistData.collectionPrice} {props.artistData.currency}
            </span>
          </b>
        </ListItem>
        <ListItem sx={{ paddingLeft: "6px", fontSize: "26px" }}>
          {props.artistData.trackName}
          <ion-icon name="musical-notes" style={{ color: "grey" }}></ion-icon>
        </ListItem>
        <ListItem
          sx={{
            flexDirection: "column",
            alignItems: "start",
            paddingLeft: 0,
            paddingTop: 0,
          }}
        >
          <List>
            <ListItem
              sx={{
                paddingLeft: 0,
                paddingTop: 0,
                flexDirection: "column",
                alignItems: "start",
              }}
            >
              <p style={{ fontSize: "26px", visibility: "hidden" }}>
                {props.artistData.artistName}
              </p>
              <b>
                Track duration:{" "}
                <span style={{ fontWeight: "normal" }}>
                  {msToTime(props.artistData.trackTimeMillis)}
                </span>
              </b>
            </ListItem>
            <ListItem sx={{ paddingLeft: 0, paddingTop: 0 }}>
              <b>
                Track Price:{" "}
                <span style={{ fontWeight: "normal" }}>
                  {props.artistData.trackPrice} {props.artistData.currency}
                </span>
              </b>
            </ListItem>
          </List>
        </ListItem>
        <ListItem></ListItem>
      </List>
    </div>
  );
};

export default HiddenArtistData;
