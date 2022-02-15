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
        title={'Feeds'}
        onClick={() => setActive('Feeds')}
        width={100}
      />
      <Button.Active
        active={active === 'Popular'}
        title={'Popular'}
        onClick={() => setActive('Popular')}
        width={100}
      />
      <Button.Active
        active={active === 'Following'}
        title={'Following'}
        onClick={() => setActive('Following')}
        width={100}
      />
    </Container>
  );
};

export default ChooseButtonNews;
