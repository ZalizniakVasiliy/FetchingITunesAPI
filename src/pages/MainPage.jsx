import { useRef } from "react";
import { useLazyGetArtistDataQuery } from "../store/iTunesApi";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import OutputArtistData from "../components/OutputArtistData";
import Loader from "../assets/Loader";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

const MainPage = () => {
  const searchArtistName = useRef();
  const [searchArtist, { data: artistDataList, isLoading }] =
    useLazyGetArtistDataQuery();

  if (isLoading) return <Loader />;

  const handleInput = (e) => {
    searchArtistName.current = e.target.value;
  };

  const handleSearch = () => {
    if (!searchArtistName.current) return;
    searchArtist(searchArtistName.current);
  };

  const handleKeyUp = (event) => {
    if (event.key === "Enter") {
      searchArtistName.current = event.target.value;
      handleSearch();
    }
  };

  const renderTracks = () => (
    <OutputArtistData localData={Object.entries(artistDataList)[1][1]} />
  );

  return (
    <Container>
      <Row className="py-5 d-flex flex-column">
        <Col
          className="d-flex align-items-center flex-column"
          style={{
            background: "#E8FAFF",
          }}
        >
          <Paper
            component="form"
            onSubmit={(event) => event.preventDefault()}
            sx={{
              margin: "20px 0 40px 0",
            }}
          >
            <InputBase
              sx={{
                backgroundColor: "#fff",
                paddingX: "10px",
                borderRadius: "5px",
              }}
              onChange={handleInput}
              onKeyUp={handleKeyUp}
              defaultValue={searchArtistName.current}
            />
            <IconButton onClick={handleSearch}>
              <SearchIcon />
            </IconButton>
          </Paper>
          {searchArtistName.current ? (
            renderTracks()
          ) : (
            <h3 className="mb-5">
              Here will be the music of the selected artist
            </h3>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default MainPage;
