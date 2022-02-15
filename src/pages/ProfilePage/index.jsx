import React from 'react';
import PageContainer from '../../components/atoms/PageContainer';
import BottomNavigation from '../../components/organism/BottomNavigation';

const ProfilePage = () => {
  return (
    <PageContainer paddingTop={15} paddingBottom={40}>
      <div>profile page</div>
      <BottomNavigation active="profile" />
    </PageContainer>
  );
};

export default ProfilePage;
