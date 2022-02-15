import React from 'react';
import { Button } from '../../atoms/Button';
import profile1 from '../../../assets/profile1.png';

const NewsContentItem = () => {
  const { Dot, Text } = Component;
  return (
    <div className="flex flex-col items-start space-y-2">
      <Button.Link href="/" title="Productivity" backgroundColor="primary" />
      <p className="break-words w-52 text-md font-medium">
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
  Dot: () => {
    return <span className="bg-gray-500 rounded-full" style={{ padding: 1 }} />;
  },
  Text: ({ text }) => {
    return (
      <p className="text-gray-500" style={{ fontSize: 8 }}>
        {text}
      </p>
    );
  },
};

export default NewsContentItem;
