import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Products from '../Pages/Products';
import Help from '../Pages/Help';

export const history = createHistory();

const AppRouter = () => (
	<Router history={history}>
		<Switch>
			<Route path="/" exact={true} />
			<Route path="/help" component={Help} />
			<Route path="/products" component={Products} exact={true} />
			<Route path="/products/:page" component={Products} />
		</Switch>
	</Router>
);

export default AppRouter;
