import React from 'react';
import { render } from 'react-dom';
import routes from './routes.jsx';

// redux配置如下
import {Provider} from 'react-redux';
import {store} from './store/index.jsx';


import './index.less';

render(
	<Provider store={store}>
		{routes}
	</Provider>, 
	document.getElementById('app')
);
