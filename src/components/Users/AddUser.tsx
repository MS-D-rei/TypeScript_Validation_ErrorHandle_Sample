import React from 'react';
import StyledCard from '@/components/UI/Card';
import styled from 'styled-components';

const StyledForm = styled.form`
  & label {
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  & input {
    font: inherit;
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    padding: 0.15rem;
    margin-bottom: 0.5rem;
  }

  & input:focus {
    outline: none;
    border-color: #4f005f;
  }
`;

function AddUser(props) {
  const addUserHandler = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <StyledCard>
      <StyledForm onSubmit={addUserHandler}>
        <label htmlFor="user-name">Username</label>
        <input id="user-name" type="text" />
        <label htmlFor="user-age">Age</label>
        <input id="user-age" type="number" />
        <button type='submit'>Add User</button>
      </StyledForm>
    </StyledCard>
  );
}

export default AddUser;
