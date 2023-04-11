import { USERS } from '../../constants/users';
import UserCard from '../user-card/UserCard';
import { StyledUserCardsContainer } from './styles';

const UserCardsContainer = ({ active, search, sort }) => {
	let filteredUsers = usersActive(active);
	filteredUsers = usersSearch(search, filteredUsers);
	filteredUsers = usersSort(sort, filteredUsers);

	return (
		<StyledUserCardsContainer>
			{filteredUsers.map(user => (
				<UserCard key={user.userId} {...user} />
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

const usersSearch = (search, filteredUsers) => {
	if (search !== '') {
		return filteredUsers.filter(user =>
			user.name.toLowerCase().includes(search)
		);
	}
	return filteredUsers;
};

const usersSort = (sort, filteredUsers) => {
	if (sort === 0) {
		return filteredUsers;
	} else {
		return filteredUsers.sort((a, b) => {
			if (a.name > b.name) return 1;
			if (a.name < b.name) return -1;
			return 0;
		});
	}
};

export default UserCardsContainer;
