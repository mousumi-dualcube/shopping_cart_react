var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var Main = require("../components/Main");
var Home = require("../components/Home");
var shop = require("../components/shop");

var routes = (
	<Router history={hashHistory}>
		<Route path='/' component={Main}>
			<IndexRoute component={Home}/>
			<Route path='shop' header="Shop" component={shop} />
		</Route>
	</Router>
);
module.exports = routes;