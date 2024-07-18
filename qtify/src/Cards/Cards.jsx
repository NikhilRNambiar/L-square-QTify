import React from 'react';
import { Card, CardContent, CardMedia, Typography, Chip } from '@mui/material';
import styles from './Cards.module.css';

const Cards = ({ album }) => {
  return (
    <div>
    <Card className={styles.card}>
      <CardMedia
        component="img"
        height="140"
        image={album.image}
        alt={album.title}
        className={styles.media}
      />
      <CardContent className={`${styles.content} ${styles.customContent}`}>
        <Chip label={`${album.follows} Follows`} className={styles.chip} />
      </CardContent>
      
      
    </Card>
        <div className={styles.title}>
            <Typography >{album.title}</Typography>
        </div>
    </div>
  );
};

export default Cards;
