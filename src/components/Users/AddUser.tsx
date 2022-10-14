import React, { useRef, useState } from 'react';
import { StyledCardUserInput } from '@/components/UI/StyledCard';
import styled from 'styled-components';
import StyledButton from '@/components/UI/StyledButton';
import ErrorModal from '@/components/UI/ErrorModal';
import { ErrorAddUser } from '@/components/UI/types';

function AddUser(props: { onNewUserSave: Function }) {
  // Use user object for less state as much as possible.
  const [enteredUserData, setEnteredUserData] = useState({
    name: '',
    age: '',
  });

  const [error, setError] = useState<ErrorAddUser>({ title: '', message: '' });

  // const nameInputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const nameInputRef = useRef(null);
  // const ageInputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const ageInputRef = useRef(null);

  const addUserHandler = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(nameInputRef);
    if (
      enteredUserData.name.trim().length === 0 ||
      enteredUserData.age.trim().length === 0
    ) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }
    if (+enteredUserData.age < 0) {
      setError({
        title: 'Invalid age',
        message: 'Plesae enter a age (>= 0)',
      });
      return;
    }
    const newUserData = { id: `${Math.random()}`, ...enteredUserData };
    console.log(newUserData);
    props.onNewUserSave(newUserData);
    setEnteredUserData({ name: '', age: '' });
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

  const closeErrorModalHandler = () => {
    setError({ title: '', message: '' });
  };

  const showError = error.title && (
    <ErrorModal
      title={error.title}
      message={error.message}
      onClick={closeErrorModalHandler}
    />
  );

  return (
    <React.Fragment>
      {showError}
      <StyledCardUserInput>
        <StyledForm onSubmit={addUserHandler}>
          <label htmlFor="user-name">Username</label>
          <input
            id="user-name"
            type="text"
            value={enteredUserData.name}
            onChange={userNameChangeHandler}
            ref={nameInputRef}
          />
          <label htmlFor="user-age">Age (years)</label>
          <input
            id="user-age"
            type="number"
            value={enteredUserData.age}
            onChange={userAgeChangeHandler}
            ref={ageInputRef}
          />
          <StyledButton type="submit">Add User</StyledButton>
        </StyledForm>
      </StyledCardUserInput>
    </React.Fragment>
  );
}

export default AddUser;

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
