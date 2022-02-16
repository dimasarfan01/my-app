import React from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../../atoms/Container';
import NewsContentItem from './NewsContentItem';

const NewsItem = ({ data }) => {
  const navigate = useNavigate();
  return (
    <Container
      onClick={() => navigate(`/news/${data._id}`)}
      className="flex justify-between items-center"
      marginBottom={20}
    >
      <NewsContentItem data={data} />
      <img
        src={data.image}
        alt="news_img"
        className="rounded-lg object-cover"
        style={{ height: 110, width: 110 }}
      />
    </Container>
  );
};

export default NewsItem;
