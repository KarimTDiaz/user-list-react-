import Filters from '../filters/Filters';
import Title from '../title/Title';
import { useState } from 'react';
import UserCardsContainer from '../user-cards-container/UserCardsContainer';
import { StyledMainContainer } from './styles';

const MainContainer = () => {
	const [active, setActive] = useState(false);
	const [search, setSearch] = useState('');
	const [sort, setSort] = useState(0);

	return (
		<StyledMainContainer>
			<Title>Listado de usuarios</Title>
			<Filters
				active={active}
				setActive={setActive}
				setSearch={setSearch}
				setSort={setSort}
			/>
			<UserCardsContainer active={active} search={search} sort={sort} />
		</StyledMainContainer>
	);
};

export default MainContainer;
