import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Products from '../Pages/Products';
import Help from '../Pages/Help';
import SelectedProducts from '../Pages/SelectedProducts';
import PageNotFound from '../Pages/PageNotFound';

export const history = createHistory();

const AppRouter = () => (
	<Router history={history}>
		<Switch>
			<Route path="/" component={Products} exact={true} />
			<Route path="/help" component={Help} />
			<Route path="/products" component={SelectedProducts} />
			<Route component={PageNotFound} />
		</Switch>
	</Router>
);

export default AppRouter;
