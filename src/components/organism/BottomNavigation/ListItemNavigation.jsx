import React from 'react';
import { Link } from 'react-router-dom';

const ListItemNavigation = ({
  active = false,
  iconActive,
  iconInActive,
  href = '/',
}) => {
  return (
    <Link
      to={href}
      className="relative flex flex-col items-center h-full justify-center"
    >
      {active ? (
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
