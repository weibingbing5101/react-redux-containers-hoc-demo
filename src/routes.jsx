import React from 'react'
import { Router, Route,Switch,Link } from 'react-router';   // 以后没有 hashHistory IndexRoute 模块了
import createHashHistory from 'history/createHashHistory';

import Nav from './pages/Nav/Nav.jsx';


import Home from './pages/Home/Home.jsx';
import List from './pages/List/List.jsx';
import CounterContainer from './containers/Counter.jsx';

const routes = (
	<Router history={createHashHistory({})}>
		<div>
		<Nav></Nav>
		<Switch>
			<Route path="/counter" component={CounterContainer}></Route>
			<Route path="/list" component={List}></Route>
			<Route path="/" component={Home}></Route>
		</Switch>
		</div>
  	</Router>
)

// Router下只能有一个子Route节点  所有路径都匹配这个组件     <Route component path="/" component={Home}/>

export default routes;
/*

<Route children path="login" getComponent={Home} />
	    	<Route children path="write/:id" getComponent={Home} />
*/