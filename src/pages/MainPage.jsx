import React, {useEffect, useState} from 'react';
import {useGetArtistDataQuery} from '../store/iTunesApi';
import Input from 'rsuite/Input';
import InputGroup from 'rsuite/InputGroup';
import SearchIcon from '@rsuite/icons/Search';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import OutputArtistData from '../components/OutputArtistData';
import Loader from "../assets/Loader";

const MainPage = () => {
    const [artistName, setArtistName] = useState();
    const [currentArtistName, setCurrentArtistName] = useState();
    const [skip, setSkip] = useState(true);
    const {data: artistData, isLoading} = useGetArtistDataQuery(currentArtistName, {skip});
    const [localArtistData, setLocalArtistData] = useState([]);

    useEffect(() => {
        const getCurrentArtistData = async () => {
            const interimArtistData = Object.entries(await artistData)[1];
            setLocalArtistData(interimArtistData[1]);
        };

        getCurrentArtistData();

    }, [artistData]);

    if (isLoading) return <Loader/>;

    const handleInput = ({target}) => {
        setArtistName(target.value);
    };

    const renderTracks = () => (
        <OutputArtistData localData={localArtistData}/>
    );

    const handleSearch = () => {
        if (artistName === undefined && currentArtistName === undefined) {
            setSkip(true);
            return;
        }
        setCurrentArtistName(artistName);
        setSkip(false);
    };

    return (
        <Container>
            <Row className='py-5 d-flex flex-column'>
                <Col className='d-flex align-items-center flex-column'
                     style={{background: '#E8FAFF'}}
                >
                    <InputGroup className='w-25 mt-3 mb-4 d-flex justify-content-end'>
                        <Input onInput={handleInput} value={artistName}/>
                        <InputGroup.Button
                            variant='light'
                            onClick={handleSearch}>
                            <SearchIcon/>
                        </InputGroup.Button>
                    </InputGroup>
                    {currentArtistName ? renderTracks()
                        :
                        <h3 className='mb-5'>Here will be the music of the selected artist</h3>}
                </Col>
            </Row>
        </Container>
    );
};

export default MainPage;