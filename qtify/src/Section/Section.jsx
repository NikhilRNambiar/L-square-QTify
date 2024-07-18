import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cards from '../Cards/Cards';
import styles from './Section.module.css';
import { Grid, Button, Typography } from '@mui/material';

function Section({ title }) {
  const [albums, setAlbums] = useState([]);
  const [collapsed, setCollapsed] = useState(true); 

  const fetchAlbums = async () => {
    try {
      const response = await axios.get('https://qtify-backend-labs.crio.do/albums/top');
      setAlbums(response.data);
    } catch (error) {
      console.error('Error fetching the albums:', error);
    }
  };

  useEffect(() => {
    fetchAlbums();
  }, []);

  const handleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <Typography variant="h4" className={styles.header}>{title}</Typography>
        <Button variant="text" className={styles.button} onClick={handleCollapse}>
          {collapsed ? 'Show All' : 'Collapse'}
        </Button>
      </div>
      <Grid container spacing={3} style={{ paddingLeft: '30px' }}>
        {albums.slice(0, collapsed ? 7 : albums.length).map(album => (
          <Grid item xl={1.71} key={album.id}>
            <Cards album={album} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Section;
