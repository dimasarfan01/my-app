import React from 'react';

const PageContainer = ({ paddingTop = 0, paddingBottom = 0, children }) => {
  return (
    <main
      className="bg-gray-100 min-h-screen h-full w-full"
      style={{ paddingTop, paddingBottom }}
    >
      {children}
    </main>
  );
};

export default PageContainer;
