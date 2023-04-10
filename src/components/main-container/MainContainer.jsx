import Filters from '../filters/Filters';
import Title from '../title/Title';
import { useState } from 'react';
import UserCardsContainer from '../user-cards-container/UserCardsContainer';
import { StyledMainContainer } from './styles';

const MainContainer = () => {
	const [active, setActive] = useState(false);
	return (
		<StyledMainContainer>
			<Title>Listado de usuarios</Title>
			<Filters active={active} setActive={setActive} />
			<UserCardsContainer active={active} setActive={setActive} />
		</StyledMainContainer>
	);
};

export default MainContainer;
