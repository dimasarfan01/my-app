import React from 'react';
import { Button } from '../Button';
import Container from '../Container';

const TitleAndLink = ({ title, titleLink, href = '/' }) => {
  return (
    <Container marginBottom={20} className="flex justify-between items-center">
      <h1 className="font-medium text-sm">{title}</h1>
      <Button.Link
        href={href}
        title={titleLink}
        textColor="link"
        withPadding={false}
      />
    </Container>
  );
};

export default TitleAndLink;
