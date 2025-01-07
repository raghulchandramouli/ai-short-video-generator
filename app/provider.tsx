import React, { PropsWithChildren } from 'react';

const Provider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return <div>{children}</div>;
};

export default Provider;