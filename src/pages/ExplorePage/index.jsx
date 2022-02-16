import React from 'react';
import { useLocation } from 'react-router-dom';
import PageContainer from '../../components/atoms/PageContainer';
import NewsJustForYou from '../../components/organism/NewsJustForYou';

const ExplorePage = () => {
  const location = useLocation().pathname.split('/')[2] || '';
  const firstLetterToUpperCase = location[0]?.toUpperCase();
  const getCategory = location?.replace(location[0], firstLetterToUpperCase);

  const { TitleAndCategory } = Component;

  return (
    <PageContainer paddingTop={15} paddingBottom={100}>
      <TitleAndCategory category={getCategory} />
      <NewsJustForYou withTitle={false} limit={10} category={getCategory} />
    </PageContainer>
  );
};

const Component = {
  TitleAndCategory: ({ category }) => {
    return (
      <div className="flex flex-col items-center my-4">
        <h1 className="font-medium">Explore More News</h1>
        {category && (
          <h2 className="text-sm text-gray-400">About {category}</h2>
        )}
      </div>
    );
  },
};

export default ExplorePage;
