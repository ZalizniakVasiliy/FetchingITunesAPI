import { useRef } from "react";
import { useLazyGetArtistDataQuery } from "../store/iTunesApi";
import InputGroup from "rsuite/InputGroup";
import SearchIcon from "@rsuite/icons/Search";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import OutputArtistData from "../components/OutputArtistData";
import Loader from "../assets/Loader";
import InputBase from "@mui/material/InputBase";

const MainPage = () => {
  const searchArtistName = useRef();
  const [searchArtist, { data: artistDataList, isLoading }] =
    useLazyGetArtistDataQuery();

  if (isLoading) return <Loader />;

  const handleInput = (e) => {
    searchArtistName.current = e.target.value;
  };

  const handleSearch = () => {
    searchArtist(searchArtistName.current);
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
          <InputGroup className="w-25 mt-3 mb-4 d-flex justify-content-end">
            <InputBase
              sx={{
                backgroundColor: "#fff",
                paddingX: "10px",
              }}
              onChange={handleInput}
              defaultValue={searchArtistName.current}
            />
            <InputGroup.Button variant="light" onClick={handleSearch}>
              <SearchIcon />
            </InputGroup.Button>
          </InputGroup>
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
