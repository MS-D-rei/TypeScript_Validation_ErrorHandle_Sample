import AddUser from '@/components/Users/AddUser';
import UsersList from '@/components/Users/UsersList';
import { useState } from 'react';
import { User } from '@/components/Users/types';

function App() {
  const [usersList, setUsersList] = useState<User[]>([]);

  const addNewUserToListHandler = (newUser: User) => {
    setUsersList((prevState) => {
      return [...prevState, newUser];
    });
  };

  return (
    <div>
      <AddUser onNewUserSave={addNewUserToListHandler} />
      <UsersList usersList={usersList} />
    </div>
  );
}

export default App;
