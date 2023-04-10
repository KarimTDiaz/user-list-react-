import { USERS } from '../../constants/users';
import UserCard from '../user-card/UserCard';
import { StyledUserCardsContainer } from './styles';

const UserCardsContainer = ({ active, setActive }) => {
	const usersList = usersActive(active);
	return (
		<StyledUserCardsContainer>
			{usersList.map(user => (
				<UserCard key={user.id} {...user} />
			))}
		</StyledUserCardsContainer>
	);
};

const usersActive = active => {
	if (active) {
		return USERS.filter(user => user.active === active);
	}
	return [...USERS];
};
export default UserCardsContainer;
