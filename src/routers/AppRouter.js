import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Products from '../Components/Products';

export const history = createHistory();

const AppRouter = () => (
	<Router history={history}>
		<div>
			<Switch>
				<Route path="/" exact={true} />
				<Route path="/products" component={Products} exact={true} />
				<Route path="/products/:page" component={Products} />
			</Switch>
		</div>
	</Router>
);

export default AppRouter;
