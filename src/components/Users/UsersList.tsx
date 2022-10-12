import { User } from '@/components/Users/types';
import { StyledCardBase } from '@/components/UI/StyledCard';
import styled from 'styled-components';

function UsersList(props: { usersList: User[] }) {
  const usersList = props.usersList;
  const showEachUser = usersList.map((user) => (
    <StyledLI key={user.id}>
      {user.name}: {user.age} years old
    </StyledLI>
  ));

  const showContent = <StyledUL>{showEachUser}</StyledUL>;

  return <StyledCardUsersList>{showContent}</StyledCardUsersList>;
}

export default UsersList;

const StyledCardUsersList = styled(StyledCardBase)`
  margin: 2rem auto;
  width: 90%;
  max-width: 40rem;
`;

const StyledUL = styled.ul`
  list-style: none;
  padding: 1rem;
`;

const StyledLI = styled.li`
  border: 1px solid #ccc;
  margin: 0.5rem 0;
  padding: 0.5rem;
`;