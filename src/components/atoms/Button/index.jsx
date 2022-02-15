import cx from 'classnames';
import { Link } from 'react-router-dom';

export const Button = {
  Active: ({ active = false, width = 0, title = '', onClick }) => {
    const className = cx({
      'bg-white shadow': active,
      'px-2 py-1 rounded-full text-sm text-gray-700 transition ease-in-out duration-500': true,
    });
    return (
      <button className={className} onClick={onClick} style={{ width }}>
        {title}
      </button>
    );
  },
  Link: ({
    href = '/',
    title = '',
    backgroundColor = '',
    textColor = '',
    withPadding = true,
  }) => {
    const className = cx({
      'bg-white opacity-80': backgroundColor === 'transparent',
      'bg-gray-200': backgroundColor === 'primary',
      'bg-blue-400': backgroundColor === 'secondary',
      'text-gray-800': textColor === 'primary',
      'text-blue-400': textColor === 'link',
      'rounded-full py-1': true,
      'px-3': withPadding,
    });

    return (
      <Link to={href} className={className} style={{ fontSize: 10 }}>
        {title}
      </Link>
    );
  },
};
