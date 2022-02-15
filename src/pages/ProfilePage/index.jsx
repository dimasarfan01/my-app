import React from 'react';
import { Button } from '../../components/atoms/Button';
import PageContainer from '../../components/atoms/PageContainer';
import Profile from '../../components/organism/Profile';
const ProfilePage = () => {
  return (
    <PageContainer paddingTop={15} paddingBottom={100} paddingHorizontal={30}>
      <Button.Link
        withArrow
        title="Profile"
        backgroundColor="primary"
        width={95}
      />
      <Profile />
    </PageContainer>
  );
};

export default ProfilePage;
