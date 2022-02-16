import React, { useEffect, useState } from 'react';
import { MdMoreVert } from 'react-icons/md';
import { useLocation } from 'react-router-dom';
import { Button } from '../../components/atoms/Button';
import Container from '../../components/atoms/Container';
import PageContainer from '../../components/atoms/PageContainer';
import { getNewsByIdAPI } from '../../services/newsAPI';
import Loading from '../../components/atoms/Loading';

const NewsPage = () => {
  const {
    NavigationAndOption,
    NewsDetailsContainer,
    NewsDetails,
    NewsInformation,
  } = Component;

  const location = useLocation();
  const [dataNewsById, setDataNewsById] = useState({});
  const [loading, setLoading] = useState(true);
  const pathId = location.pathname.split('/')[2];

  useEffect(() => {
    getNewsByIdAPI({ id: pathId }).then((res) => {
      setDataNewsById(res.data);
      setLoading(false);
    });
  }, [pathId]);

  if (loading)
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Loading />
      </div>
    );
  return (
    <PageContainer>
      <Container height={270} className="bg-gray-400 relative w-full">
        <img
          src={dataNewsById.image}
          alt="home_image"
          className="object-cover w-full"
          style={{ height: 270 }}
        />
        <NavigationAndOption title={dataNewsById.title} />
        <NewsDetailsContainer>
          <NewsDetails
            title={dataNewsById.title}
            category={dataNewsById.category}
            postedBy={dataNewsById.postedBy}
          />
          <NewsInformation />
        </NewsDetailsContainer>
      </Container>
    </PageContainer>
  );
};

const Component = {
  NavigationAndOption: ({ title }) => {
    return (
      <Container
        marginTop={15}
        paddingHorizontal={30}
        className="flex items-center absolute top-0 justify-between w-full"
      >
        <Button.Link
          withArrow
          title={title}
          backgroundColor="transparent"
          width={120}
          height={30}
        />
        <Button.Icon
          width={30}
          height={30}
          icon={<MdMoreVert className="h-4 w-4" />}
        />
      </Container>
    );
  },
  NewsDetailsContainer: ({ children }) => {
    return (
      <Container
        paddingHorizontal={30}
        paddingVertical={20}
        className="absolute top-52 w-full bg-white rounded-t-3xl"
      >
        {children}
      </Container>
    );
  },
  NewsDetails: ({ title, category, postedBy }) => {
    return (
      <div className="flex flex-col space-y-4 mb-10">
        <div className="flex flex-row items-center space-x-2">
          {category.map((item, index) => (
            <Button.Link key={index} backgroundColor="primary" title={item} />
          ))}
        </div>
        <h1 className="text-3xl font-medium">{title}</h1>
        <div className="flex items-center space-x-2">
          <img
            src={postedBy.image}
            alt="avatar"
            className="h-10 w-10 rounded-full object-cover"
          />
          <h2 className="font-medium">{postedBy.userName}</h2>
        </div>
      </div>
    );
  },
  NewsInformation: () => {
    return (
      <div>
        <h1 className="text-sm font-medium mb-6">
          Minimalism is how I reduce distractions in my life so I can do more of
          what matters.
        </h1>
        <p className="text-xs text-gray-500 mb-8 leading-6">
          if you're feeling overwhelmed with the idea of doing more of the
          things that matter most to you, your calendar is overscheduled, or
          your physical space is filled with something items that don't server
          you and your family, minimalism will help you make more space in your
          life.
        </p>
        <p className="text-xs text-gray-500 mb-6">So what is minimalism.</p>
        <Container
          marginBottom={100}
          className="border-l-2 border-black pl-4 text-xs"
        >
          Minimalism is defined as design or style in which the simplest and
          fewest elements are used to created the most beautiful and meaningful
          design.
        </Container>
      </div>
    );
  },
};

export default NewsPage;
