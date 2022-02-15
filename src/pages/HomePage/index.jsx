import React from 'react';
import PageContainer from '../../components/atoms/PageContainer';
import BottomNavigation from '../../components/organism/BottomNavigation';
import ChooseNews from '../../components/organism/ChooseNews.jsx/index.jsx';
import NewsJustForYou from '../../components/organism/NewsJustForYou';
import TopBar from '../../components/organism/TopBar';

const HomePage = () => {
  return (
    <PageContainer paddingTop={15} paddingBottom={100}>
      <TopBar />
      <ChooseNews />
      <NewsJustForYou />
      <BottomNavigation active="home" />
    </PageContainer>
  );
};

export default HomePage;
