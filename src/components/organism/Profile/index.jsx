import React from 'react';
import Container from '../../atoms/Container';
import Profile2 from '../../../assets/ghozali.jpeg';
import home2 from '../../../assets/home2.jpeg';
import { BsPencil } from 'react-icons/bs';
import MyCollections from './MyCollections';
import Dot from '../../atoms/Dot';
import { Button } from '../../atoms/Button';

const Profile = () => {
  const { ProfileAndAvatar, Banner, ProductivityTips, DataInformation } =
    Component;
  return (
    <Container marginTop={15} marginBottom={25}>
      <Container
        height={300}
        className="bg-gray-100 relative flex flex-col items-center"
      >
        <Banner />
        <ProfileAndAvatar />
      </Container>
      <DataInformation />
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
  DataInformation: () => {
    return (
      <Container
        marginBottom={30}
        className="bg-gray-200/40 p-2 rounded-2xl flex items-center justify-center space-x-2"
      >
        <Button.Active width={100} borderRoundedFull={false}>
          <span className="font-bold text-xl">1,419</span>
          <p className="text-xs text-gray-400">Liked News</p>
        </Button.Active>
        <Button.Active width={100} borderRoundedFull={false} active>
          <span className="font-bold text-xl">12</span>
          <p className="text-xs text-gray-400">Collections</p>
        </Button.Active>
        <Button.Active width={100} borderRoundedFull={false}>
          <span className="font-bold text-xl">142</span>
          <p className="text-xs text-gray-400">Following</p>
        </Button.Active>
      </Container>
    );
  },
};

export default Profile;
