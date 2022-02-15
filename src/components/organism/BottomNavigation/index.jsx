import React from 'react';
import {
  BsHouseDoor,
  BsHouseDoorFill,
  BsCompass,
  BsCompassFill,
  BsInbox,
  BsInboxFill,
  BsPerson,
  BsFillPersonFill,
} from 'react-icons/bs';
import ListItemNavigation from './ListItemNavigation';

const BottomNavigation = ({ active = 'home' }) => {
  return (
    <div className="w-full p-2 shadow rounded-t-3xl fixed bottom-0 bg-white h-20 flex items-center justify-evenly">
      <ListItemNavigation
        active={active === 'home'}
        iconActive={<BsHouseDoorFill />}
        iconInActive={<BsHouseDoor />}
        href="/"
      />
      <ListItemNavigation
        active={active === 'explore'}
        iconActive={<BsCompassFill />}
        iconInActive={<BsCompass />}
        href="/"
      />
      <ListItemNavigation
        active={active === 'inbox'}
        iconActive={<BsInboxFill />}
        iconInActive={<BsInbox />}
        href="/"
      />
      <ListItemNavigation
        active={active === 'profile'}
        iconActive={<BsFillPersonFill />}
        iconInActive={<BsPerson />}
        href="/profile"
      />
    </div>
  );
};

export default BottomNavigation;
