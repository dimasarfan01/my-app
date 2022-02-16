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

const BottomNavigation = () => {
  return (
    <div className="w-full p-2 shadow shadow-gray-300 rounded-t-3xl fixed bottom-0 bg-white h-20 flex items-center justify-center">
      <ListItemNavigation
        iconActive={<BsHouseDoorFill />}
        iconInActive={<BsHouseDoor />}
        href="/"
      />
      <ListItemNavigation
        iconActive={<BsCompassFill />}
        iconInActive={<BsCompass />}
        href="/explore"
      />
      <ListItemNavigation
        iconActive={<BsInboxFill />}
        iconInActive={<BsInbox />}
        href="/inbox"
      />
      <ListItemNavigation
        iconActive={<BsFillPersonFill />}
        iconInActive={<BsPerson />}
        href="/profile"
      />
    </div>
  );
};

export default BottomNavigation;
