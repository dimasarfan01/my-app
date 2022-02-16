import React from 'react';

const Container = ({
  marginVertical,
  marginHorizontal,
  paddingVertical,
  paddingHorizontal,
  marginTop,
  marginBottom,
  className,
  height,
  width,
  onClick,
  children,
}) => {
  return (
    <div
      onClick={onClick}
      className={className}
      style={{
        marginLeft: marginHorizontal,
        marginRight: marginHorizontal,
        marginTop: marginVertical ? marginVertical : marginTop,
        marginBottom: marginVertical ? marginVertical : marginBottom,
        paddingLeft: paddingHorizontal,
        paddingRight: paddingHorizontal,
        paddingTop: paddingVertical,
        paddingBottom: paddingVertical,
        height,
        width,
      }}
    >
      {children}
    </div>
  );
};

export default Container;
