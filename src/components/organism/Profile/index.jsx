import React from 'react';
import Container from '../../atoms/Container';
import Profile2 from '../../../assets/ghozali.jpeg';
import home2 from '../../../assets/home2.jpeg';
import { BsPencil } from 'react-icons/bs';
import MyCollections from './MyCollections';
import Dot from '../../atoms/Dot';

const Profile = () => {
  const { ProfileAndAvatar, Banner, ProductivityTips } = Component;
  return (
    <Container marginTop={15} marginBottom={25}>
      <Container
        height={300}
        className="bg-gray-100 relative flex flex-col items-center"
      >
        <Banner />
        <ProfileAndAvatar />
      </Container>
      <MyCollections />
      <ProductivityTips />
    </Container>
  );
};

const Component = {
  Banner: () => {
    return (
      <img
        src={home2}
        alt="banner"
        className="h-40 w-full object-cover rounded-xl"
      />
    );
  },
  ProfileAndAvatar: () => {
    return (
      <div className="absolute top-24 flex flex-col items-center space-y-1">
        <div className="relative">
          <img
            src={Profile2}
            alt="banner"
            className="h-32 w-32 object-cover rounded-full border-gray-100"
            style={{ borderWidth: 6 }}
          />
          <span className="bg-green-600 p-1.5 rounded-full absolute bottom-1 right-1 border-4 border-gray-100">
            <BsPencil className="h-3 w-3 text-white" />
          </span>
        </div>
        <p className="font-medium">Gohzali Everyday</p>
        <p className="text-sm text-gray-400">@ghozali_everyday</p>
      </div>
    );
  },
  ProductivityTips: () => {
    return (
      <div className="flex flex-col">
        <h1 className="font-medium text-sm">Productivity Tips</h1>
        <div className="flex items-center space-x-2 text-gray-400 text-xs">
          <p>42 Stories</p>
          <Dot />
          <p>21 Writers</p>
        </div>
      </div>
    );
  },
};

export default Profile;
