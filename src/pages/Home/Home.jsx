import React,{Component} from 'react';
require('./Home.less');
export default class Home extends Component {

	constructor(props) {
	  super(props);
	
	  this.state = {isok: true};
	}

	render() {
		let clname = this.state.isok ? 'home-box-active' : 'home-box';
		return (
			<div className={clname}>
				<ul className="home-list">
					<li className="home-list-item">1</li>
					<li className="home-list-item">1</li>
					<li className="home-list-item">1</li>
					<li className="home-list-item">1</li>
					<li className="home-list-item">1</li>
					<li className="home-list-item">1</li>
					<li className="home-list-item">1</li>
					<li className="home-list-item">1</li>
					<li className="home-list-item">1</li>
					<li className="home-list-item">1</li>
					<li className="home-list-item">1</li>
					<li className="home-list-item">1</li>
					<li className="home-list-item">1</li>
					<li className="home-list-item">1</li>
				</ul>
			</div>
		)
	}
};