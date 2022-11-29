import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import VisibleArtistData from './VisibleArtistData';
import HiddenArtistData from './HiddenArtistData';
import * as React from 'react';
import {styled} from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import {useState} from 'react';
import Header from './Header';

const Accordion = styled(props => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))
(({theme}) => ({
    border: `0px ${theme.palette.divider}`,
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled(props => (
    <MuiAccordionSummary {...props}/>
))(({theme}) => ({}));

const AccordionDetails = styled(MuiAccordionDetails)
(({theme}) => ({}));

const OutputArtistData = props => {
    const [expanded, setExpanded] = useState();

    const handleChange = panel => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    let oddBackgroundComponent = '#E8FAFF';
    let evenBackgroundComponent = '#BFDDEB';

    return (
        <div>
            <Header/>

            {props.localData.map((artistAlbum, index) => (
                <Accordion expanded={expanded === `panel${index}`}
                           onChange={handleChange(`panel${index}`)}
                           key={index}
                           id={index}
                           style={{
                               backgroundColor: (index % 2 === 0
                                   ?
                                   `${evenBackgroundComponent}`
                                   :
                                   `${oddBackgroundComponent}`)
                           }}
                >
                    <AccordionSummary aria-controls={`panel${index}d-content`}
                                      id={`panel${index}d-header`}
                                      expandIcon={expanded === `panel${index}`
                                          ?
                                          <RemoveOutlinedIcon sx={{fontSize: '2rem'}}/>
                                          :
                                          <AddOutlinedIcon sx={{fontSize: '2rem'}}/>}
                    >
                        <VisibleArtistData index={index}
                                           artistData={artistAlbum}/>
                    </AccordionSummary>
                    <AccordionDetails>
                        <HiddenArtistData index={index}
                                          artistData={artistAlbum}/>
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    );
};

export default OutputArtistData;