import Filters from '../filters/Filters';
import Title from '../title/Title';
import { useState } from 'react';
import UserCardsContainer from '../user-cards-container/UserCardsContainer';
import { StyledMainContainer } from './styles';

const MainContainer = () => {
	const [active, setActive] = useState(false);
	const [search, setSearch] = useState('');
	return (
		<StyledMainContainer>
			<Title>Listado de usuarios</Title>
			<Filters active={active} setActive={setActive} setSearch={setSearch} />
			<UserCardsContainer
				active={active}
				setActive={setActive}
				search={search}
			/>
		</StyledMainContainer>
	);
};

export default MainContainer;
