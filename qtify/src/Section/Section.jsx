
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cards from '../Cards/Cards';
import Carousel from '../Carousel/Carousel';
import styles from './Section.module.css';
import { Grid, Button, Typography } from '@mui/material';
import { Tabs, Tab, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomTabs = styled(Tabs)(({ theme }) => ({
    '& .MuiTabs-indicator': {
        backgroundColor: 'rgba(52, 201, 75, 1)',
    },
}));


const CustomTab = styled(Tab)(({ theme }) => ({
    '&.Mui-selected': {
        backgroundColor: '#000000', 
        color: '#FFFFFF', 
    },
    '&.MuiTab-root': {
        backgroundColor: '#000000', 
        color: '#FFFFFF', 
    },
}));

function Section({ title, apiEndpoint,isSongSection = false, showCollapseButton = true }) {
    const [albums, setAlbums] = useState([]);
    const [collapsed, setCollapsed] = useState(true);
    const [genres, setGenres] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState('All');

    const fetchAlbums = async () => {
        try {
            const response = await axios.get(apiEndpoint);
            
            setAlbums(response.data);
        } catch (error) {
            console.error('Error fetching the albums:', error);
        }
    };

    const fetchGenres = async () => {
        try {
            const response = await axios.get('https://qtify-backend-labs.crio.do/genres');

            if (response.data && response.data.data && Array.isArray(response.data.data)) {
                setGenres([{ key: 'All', label: 'All' }, ...response.data.data]);
            } else {
                console.error('Genres response is not in the expected format:', response.data);
            }
        } catch (error) {
            console.error('Error fetching genres:', error);
        }
    };

    useEffect(() => {
        fetchAlbums();
        if (isSongSection) {
            fetchGenres();
        }
    }, [apiEndpoint,isSongSection]);

    const handleCollapse = () => {
        setCollapsed(!collapsed);
    };

    const handleTabChange = (event, newValue) => {
        console.log('Tab changed to:', newValue);
        setSelectedGenre(newValue);
        
    };
    const filteredAlbums = selectedGenre === 'All' ? albums : albums.filter(album => album.genre.key === selectedGenre);
    console.log(filteredAlbums);
    return (
        <div className={styles.section}>
            <div className={styles.header}>
                <Typography variant="h4">{title}</Typography>
                {showCollapseButton && (
                    <Button variant="text" className={styles.button} onClick={handleCollapse}>
                        {collapsed ? 'Show All' : 'Collapse'}
                    </Button>
                )}
            </div>
            {isSongSection && (
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                
                        
                        <CustomTabs
                            value={selectedGenre}
                            onChange={handleTabChange}
                            aria-label="genre tabs"
                            variant="scrollable"
                            scrollButtons="auto"
                            
                        >
                            {genres.map(genre => (
                                <CustomTab key={genre.key} value={genre.key} label={genre.label} className={styles.tabs} />
                            ))}
                        </CustomTabs>
                    
                
                </Box>
                )}
                <br/>
            {collapsed && showCollapseButton ? (
                <Grid container spacing={3}>
                    {albums.map(album => (
                        <Grid item xl={1.71} key={album.id}>
                            <Cards album={album} />
                        </Grid>
                    ))}
                </Grid>
            ) : (
                <Carousel data={isSongSection? filteredAlbums:albums} renderItem={album => <Cards album={album} isSongSection={isSongSection} />} />
            )}
        </div>
    );
}

export default Section;
