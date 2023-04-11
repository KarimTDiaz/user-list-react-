import { USERS } from '../../constants/users';
import UserCard from '../user-card/UserCard';
import { StyledUserCardsContainer } from './styles';

const UserCardsContainer = ({ active, setActive, search }) => {
	const users = usersActive(active);
	const users2 = usersSearch(search);

	return (
		<StyledUserCardsContainer>
			{users.map(user => (
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

const usersSearch = search => {
	return USERS.filter(user => user.name.includes(search));
};

export default UserCardsContainer;
