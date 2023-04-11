import { StyledFilters } from './styles';

const Filters = ({ active, setActive, setSearch }) => {
	return (
		<StyledFilters>
			<input type='text' onChange={ev => FilterSearch(setSearch, ev)} />
			<label htmlFor='active'>User Actives</label>
			<input
				onChange={() => FilterActive(active, setActive)}
				type='checkbox'
				id='active'
			/>
			<select>
				<option>Default</option>
				<option>By Name</option>
			</select>
		</StyledFilters>
	);
};

const FilterActive = (active, setActive) => {
	setActive(!active);
};

const FilterSearch = (setSearch, ev) => {
	setSearch(ev.target.value);
};

export default Filters;
