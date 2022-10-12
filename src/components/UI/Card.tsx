import React from 'react';
import styled from 'styled-components';

const StyledContent = styled.div`
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
  margin: 2rem auto;
  padding: 1rem;
  width: 90%;
  max-width: 40rem;
`;

function StyledCard(props: { children: React.ReactNode }) {
  return <StyledContent>{props.children}</StyledContent>;
}

export default StyledCard;
