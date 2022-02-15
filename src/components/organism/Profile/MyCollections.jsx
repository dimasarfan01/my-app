import React from 'react';
import Container from '../../atoms/Container';
import TitleAndLink from '../../atoms/TitleAndLink';
import collection1 from '../../../assets/collection1.jpeg';
import collection2 from '../../../assets/collection2.jpeg';
import collection3 from '../../../assets/collection3.jpeg';

const MyCollections = () => {
  const { CollectionImage } = Component;
  return (
    <Container marginBottom={20}>
      <TitleAndLink title="Your Collection" titleLink="Show All" href="/" />
      <CollectionImage />
    </Container>
  );
};

const Component = {
  CollectionImage: () => {
    return (
      <Container className="flex space-x-2" height={140}>
        <img
          src={collection1}
          alt="collection_image"
          className="rounded-lg object-cover w-full"
        />
        <div className="flex flex-col space-y-2">
          <img
            src={collection2}
            alt="collection_image"
            className="rounded-lg"
            style={{ height: 75, minWidth: 100 }}
          />
          <img
            src={collection3}
            alt="collection_image"
            className="rounded-lg"
            style={{ height: 75, minWidth: 100 }}
          />
        </div>
      </Container>
    );
  },
};

export default MyCollections;
