import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import importedComponent from 'react-imported-component';

import { Home, Loading } from '.';

const AsyncDynamicPage = importedComponent(
	() => import(/* webpackChunkName:'DynamicPage' */ './DynamicPage'),
	{
		LoadingComponent: Loading
	}
);
const AsyncNoMatch = importedComponent(
	() => import(/* webpackChunkName:'NoMatch' */ './NoMatch'),
	{
		LoadingComponent: Loading
	}
);

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/dynamic" component={AsyncDynamicPage} />
				<Route component={AsyncNoMatch} />
			</Switch>
		</Router>
	);
};

export default App;
