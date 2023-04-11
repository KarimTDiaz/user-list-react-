import { StyledFilters } from './styles';

const Filters = ({ active, setActive, setSearch, setSort }) => {
	return (
		<StyledFilters>
			<input type='text' onChange={ev => FilterSearch(setSearch, ev)} />
			<div>
				<label htmlFor='active'>User Actives</label>
				<input
					onChange={() => FilterActive(active, setActive)}
					type='checkbox'
					id='active'
				/>
			</div>
			<select onChange={ev => FilterSort(setSort, ev)}>
				<option value={0}>Default</option>
				<option value={1}>By Name</option>
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

const FilterSort = (setSort, ev) => {
	setSort(Number(ev.target.value));
};

export default Filters;
