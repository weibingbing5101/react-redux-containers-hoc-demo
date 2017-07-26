import React from 'react'
import { Router, Route,Switch,Link } from 'react-router';   // 以后没有 hashHistory IndexRoute 模块了
import createHashHistory from 'history/createHashHistory';

import List from './pages/List/List.jsx';

const routes = (
	<Router history={createHashHistory({})}>
			<Route path="*" component={List}></Route>
  	</Router>
)

// Router下只能有一个子Route节点  所有路径都匹配这个组件     <Route component path="/" component={Home}/>

export default routes;
/*

<Route children path="login" getComponent={Home} />
	    	<Route children path="write/:id" getComponent={Home} />
*/