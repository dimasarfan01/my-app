import React from 'react';
import Container from '../../atoms/Container';
import TitleAndLink from '../../atoms/TitleAndLink';
import NewsItem from './NewsItem';

const NewsJustForYou = () => {
  return (
    <Container marginHorizontal={30}>
      <TitleAndLink title="Just For You" titleLink="See More" />
      <NewsItem />
      <NewsItem />
      <NewsItem />
    </Container>
  );
};

export default NewsJustForYou;
