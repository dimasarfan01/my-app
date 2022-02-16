import React from 'react';
import Container from '../../atoms/Container';
import profile1 from '../../../assets/profile1.png';
import moment from 'moment';

const TopBar = () => {
  const { TitleAndProfile, Greeting } = Component;
  return (
    <Container paddingHorizontal={25}>
      <TitleAndProfile />
      <Greeting />
    </Container>
  );
};

const Component = {
  TitleAndProfile: () => {
    return (
      <div className="flex items-start justify-between w-full">
        <div className="flex items-center space-x-2">
          <span className="bg-gray-800 p-2 rounded-full" />
          <h1 className="font-semibold text-sm">Bulletin News</h1>
        </div>
        <div className="relative flex flex-col">
          <img src={profile1} alt="profile" className="h-10 w-10" />
          <span className="bg-green-600 p-1 rounded-full z-10 absolute bottom-0 right-0 border-2 border-white" />
        </div>
      </div>
    );
  },
  Greeting: () => {
    return (
      <div className="mt-6">
        <p className="text-gray-400 text-xs mb-2">
          {moment().format('dddd, MMM Do')}
        </p>
        <p className="font-semibold text-2xl">Welcome back,</p>
        <p className="font-semibold text-2xl">Jennifer</p>
      </div>
    );
  },
};

export default TopBar;
