import styled from 'styled-components';

export const StyledCardBase = styled.div`
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
`;

export const StyledCardUserInput = styled(StyledCardBase)`
  margin: 2rem auto;
  padding: 1rem;
  width: 90%;
  max-width: 40rem;
`;

export const StyledCardUsersList = styled(StyledCardBase)`
  margin: 2rem auto;
  width: 90%;
  max-width: 40rem;

  & ul {
    list-style: none;
    padding: 1rem;
  }

  & li {
    border: 1px solid #ccc;
    margin: 0.5rem 0;
    padding: 0.5rem;
  }
`;
