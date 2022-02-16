import React from 'react';
import { MdMoreVert } from 'react-icons/md';
import home1 from '../../assets/home3.jpeg';
import profile1 from '../../assets/profile1.png';
import { Button } from '../../components/atoms/Button';
import Container from '../../components/atoms/Container';
import PageContainer from '../../components/atoms/PageContainer';

const NewsPage = () => {
  const {
    NavigationAndOption,
    NewsDetailsContainer,
    NewsDetails,
    NewsInformation,
  } = Component;
  return (
    <PageContainer>
      <Container height={270} className="bg-gray-400 relative w-full">
        <img
          src={home1}
          alt="home_image"
          className="object-cover w-full"
          style={{ height: 270 }}
        />
        <NavigationAndOption />
        <NewsDetailsContainer>
          <NewsDetails />
          <NewsInformation />
        </NewsDetailsContainer>
      </Container>
    </PageContainer>
  );
};

const Component = {
  NavigationAndOption: () => {
    return (
      <Container
        marginTop={15}
        paddingHorizontal={30}
        className="flex items-center absolute top-0 justify-between w-full"
      >
        <Button.Link
          withArrow
          title="Minimal: The minimum you need to know"
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
  NewsDetails: () => {
    return (
      <div className="flex flex-col space-y-4 mb-10">
        <div className="flex flex-row items-center space-x-2">
          <Button.Link backgroundColor="primary" title="Life Improvment" />
          <Button.Link backgroundColor="primary" title="Knowledge" />
        </div>
        <h1 className="text-3xl font-medium">
          Minimal: Things You Should Know
        </h1>
        <div className="flex items-center space-x-2">
          <img src={profile1} alt="avatar" className="h-10 w-10" />
          <h2 className="font-medium">Life At</h2>
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
