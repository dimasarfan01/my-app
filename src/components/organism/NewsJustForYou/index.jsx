import React from 'react';
import { Button } from '../../atoms/Button';
import Container from '../../atoms/Container';
import NewsItem from './NewsItem';

const NewsJustForYou = () => {
  const { TitleAndSeeMore } = Component;
  return (
    <Container marginHorizontal={30}>
      <TitleAndSeeMore />
      <NewsItem />
      <NewsItem />
      <NewsItem />
    </Container>
  );
};

const Component = {
  TitleAndSeeMore: () => {
    return (
      <Container
        marginTop={30}
        marginBottom={20}
        className="flex justify-between"
      >
        <h1>Just For You</h1>
        <Button.Link
          href="/"
          title="See More"
          textColor="link"
          withPadding={false}
        />
      </Container>
    );
  },
};

export default NewsJustForYou;
