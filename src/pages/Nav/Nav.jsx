import React,{Component} from 'react';
import { Link } from 'react-router';   // 以后没有 hashHistory IndexRoute Link 模块了

import './Nav.less';

export default class Nav extends Component {
	render() {
		return (
			<div className="nav-box">
				<a href="#/" className="active">link index</a>
				<a href="#/list">link list</a>
				<a href="#/counter">link Counter</a>
				{/*<a href="#/lazy-loading-image-demo">link lazy-loading-image-demo</a>*/}
			</div>
		)
	}
};