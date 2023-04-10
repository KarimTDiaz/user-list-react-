import { Routes, Route } from 'react-router-dom';

import MainContainer from '../components/main-container/MainContainer';
import UserInfo from '../components/user-info/UserInfo';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<MainContainer />} />
			<Route path='/user/:userId' element={<UserInfo />} />
		</Routes>
	);
};

export default Router;
