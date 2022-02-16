import React from 'react';
import { useLocation } from 'react-router-dom';
import PageContainer from '../../components/atoms/PageContainer';
import NewsJustForYou from '../../components/organism/NewsJustForYou';

const ExplorePage = () => {
  const location = useLocation().pathname.split('/')[2];
  const firstLetterToUpperCase = location[0].toUpperCase();
  const getCategory = location.replace(location[0], firstLetterToUpperCase);

  console.log(getCategory);
  return (
    <PageContainer paddingTop={15} paddingBottom={100}>
      <h1 className="text-center font-medium my-4">Explore More News</h1>
      <NewsJustForYou withTitle={false} limit={10} />
    </PageContainer>
  );
};

export default ExplorePage;
