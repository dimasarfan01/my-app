import React from 'react';
import { Button } from '../../atoms/Button';
import profile1 from '../../../assets/profile1.png';
import Dot from '../../atoms/Dot';

const NewsContentItem = () => {
  const { Text } = Component;
  return (
    <div className="flex flex-col items-start space-y-2 w-52">
      <Button.Link href="/" title="Productivity" backgroundColor="primary" />
      <p className="break-words text-md font-medium">
        Elon Musk on How to learn and adapth more Faster:
      </p>
      <div className="flex items-center space-x-2">
        <img src={profile1} alt="avatar" className="rounded-full h-5 w-5" />
        <Text text="How To Be Better" />
        <Dot />
        <Text text="4 Min" />
        <Dot />
        <Text text="12 Hours Ago" />
      </div>
    </div>
  );
};

const Component = {
  Text: ({ text }) => {
    return (
      <p className="text-gray-500" style={{ fontSize: 7.5 }}>
        {text}
      </p>
    );
  },
};

export default NewsContentItem;
