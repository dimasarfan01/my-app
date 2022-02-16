import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const ListItemNavigation = ({ iconActive, iconInActive, href = '/' }) => {
  const location = useLocation();

  return (
    <Link
      to={href}
      className="relative flex flex-col items-center h-full justify-center px-7"
    >
      {href === location.pathname ? (
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
