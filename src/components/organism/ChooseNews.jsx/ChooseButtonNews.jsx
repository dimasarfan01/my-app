import React, { useState } from 'react';
import { Button } from '../../atoms/Button';
import Container from '../../atoms/Container';

const ChooseButtonNews = () => {
  const [active, setActive] = useState('Feeds');
  return (
    <Container
      className="rounded-full bg-gray-200 p-2 justify-between flex"
      marginHorizontal={25}
      marginBottom={25}
    >
      <Button.Active
        active={active === 'Feeds'}
        onClick={() => setActive('Feeds')}
        width={100}
      >
        Feeds
      </Button.Active>
      <Button.Active
        active={active === 'Popular'}
        onClick={() => setActive('Popular')}
        width={100}
      >
        Popular
      </Button.Active>
      <Button.Active
        active={active === 'Following'}
        onClick={() => setActive('Following')}
        width={100}
      >
        Following
      </Button.Active>
    </Container>
  );
};

export default ChooseButtonNews;
