import React from 'react';

function Wrapper(props: { children: React.ReactNode }) {
  return <React.Fragment>{props.children}</React.Fragment>;
}

export default Wrapper;
