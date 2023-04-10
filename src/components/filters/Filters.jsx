import { StyledFilters } from './styles';

const Filters = ({ active, setActive }) => {
	return (
		<StyledFilters>
			<input type='text' />
			<label htmlFor='active'>User Actives</label>
			<input
				onClick={() => FilterActive(active, setActive)}
				type='checkbox'
				id='active'
			/>
		</StyledFilters>
	);
};

const FilterActive = (active, setActive) => {
	setActive(!active);
};

export default Filters;
