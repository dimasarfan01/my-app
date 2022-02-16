import React, { useEffect, useState } from 'react';
import Container from '../../atoms/Container';
import TitleAndLink from '../../atoms/TitleAndLink';
import NewsItem from './NewsItem';
import { getAllNewsAPI } from '../../../services/newsAPI';

const NewsJustForYou = ({ withTitle = true, limit = 3, category = '' }) => {
  const [dataNews, setDataNews] = useState([]);

  useEffect(() => {
    getAllNewsAPI({ limit, category }).then((res) => setDataNews(res.data));
  }, [category, limit]);

  return (
    <Container marginHorizontal={30}>
      {withTitle && (
        <TitleAndLink
          title="Just For You"
          titleLink="See More"
          href="/explore"
        />
      )}
      {dataNews.length !== 0 ? (
        dataNews.map((news) => <NewsItem key={news._id} data={news} />)
      ) : (
        <p className="text-sm text-gray-500 animate-pulse">Loading...</p>
      )}
    </Container>
  );
};

export default NewsJustForYou;
