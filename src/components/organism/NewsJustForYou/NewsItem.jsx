import React from 'react';
import Container from '../../atoms/Container';
import home1 from '../../../assets/home1.jpeg';
import NewsContentItem from './NewsContentItem';

const NewsItem = () => {
  return (
    <Container className="flex justify-between items-center" marginBottom={20}>
      <NewsContentItem />
      <img
        src={home1}
        alt="news_img"
        className="rounded-lg object-cover"
        style={{ height: 110, width: 110 }}
      />
    </Container>
  );
};

export default NewsItem;
