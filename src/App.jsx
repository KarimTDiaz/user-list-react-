import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './styles/globalStyles';
import Router from './router/Router';

const App = () => {
	return (
		<>
			<GlobalStyle />
			<BrowserRouter>
				<Router />
			</BrowserRouter>
		</>
	);
};

export default App;
