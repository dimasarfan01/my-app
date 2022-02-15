import React from 'react';
import Container from '../../atoms/Container';
import ChooseButtonNews from './ChooseButtonNews';
import NewsSlider from './NewsSlider';

const ChooseNews = () => {
  return (
    <Container marginVertical={25}>
      <ChooseButtonNews />
      <NewsSlider />
    </Container>
  );
};

export default ChooseNews;
