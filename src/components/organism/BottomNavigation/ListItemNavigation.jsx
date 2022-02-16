import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const ListItemNavigation = ({ iconActive, iconInActive, href = '/' }) => {
  const location = useLocation().pathname.split('/');
  const path = location.length > 2 ? location[1] : location[0];
  console.log(path);
  return (
    <Link
      to={href}
      className="relative flex flex-col items-center h-full justify-center px-7"
    >
      {href === '/' + path ? (
        <>
          {iconActive}
          <span className="absolute -bottom-2.5 w-14 h-1.5 bg-black rounded-t-full" />
        </>
      ) : (
        <> {iconInActive}</>
      )}
    </Link>
  );
};

export default ListItemNavigation;
