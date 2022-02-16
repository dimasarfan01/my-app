import React from 'react';
import { Button } from '../../atoms/Button';
import Dot from '../../atoms/Dot';
import moment from 'moment';

const NewsContentItem = ({ data }) => {
  const { Text } = Component;
  return (
    <div className="flex flex-col items-start space-y-2 w-52">
      <div className="flex items-center space-x-2">
        {data.category.map((item, index) => (
          <Button.Link
            key={index}
            href="/"
            title={item}
            backgroundColor="primary"
          />
        ))}
      </div>
      <p className="break-words text-md font-medium">{data.title}</p>
      <div className="flex items-center space-x-2">
        <img
          src={data.postedBy.image}
          alt="avatar"
          className="rounded-full h-5 w-5 object-cover"
        />
        <Text text={data.postedBy.userName} />
        <Dot />
        <Text text={data.duration} />
        <Dot />
        <Text text={moment(data.createdAt).startOf('hour').fromNow()} />
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
