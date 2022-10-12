import React, { useState } from 'react';
import StyledCard from '@/components/UI/StyledCard';
import styled from 'styled-components';
import StyledButton from '@/components/UI/StyledButton';

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
  // Use user object for less state as much as possible.
  const [enteredUserData, setEnteredUserData] = useState({ id: '', name: '', age: '' });

  const addUserHandler = (event: React.FormEvent) => {
    event.preventDefault();
    setEnteredUserData((prevState) => ({
      ...prevState,
      id: Math.random().toString(),
    }))
    console.log(enteredUserData)
  };

  const userNameChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEnteredUserData((prevState) => ({
      ...prevState,
      name: event.target.value,
    }));
  };

  const userAgeChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredUserData((prevState) => ({
      ...prevState,
      age: event.target.value,
    }));
  };

  return (
    <StyledCard>
      <StyledForm onSubmit={addUserHandler}>
        <label htmlFor="user-name">Username</label>
        <input id="user-name" type="text" onChange={userNameChangeHandler} />
        <label htmlFor="user-age">Age (years)</label>
        <input id="user-age" type="text" onChange={userAgeChangeHandler} />
        <StyledButton type="submit">Add User</StyledButton>
      </StyledForm>
    </StyledCard>
  );
}

export default AddUser;
