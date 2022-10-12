import { User } from '@/components/Users/types';
import { StyledCardUsersList } from '@/components/UI/StyledCard';

function UsersList(props: { usersList: User[] }) {
  const usersList = props.usersList;
  const showEachUser = usersList.map((user) => (
    <li key={user.id}>
      {user.name}: {user.age} years old
    </li>
  ));

  const showContent = <ul>{showEachUser}</ul>;

  return <StyledCardUsersList>{showContent}</StyledCardUsersList>;
}

export default UsersList;
