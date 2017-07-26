import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// 组件
import Counter from '../pages/Counter/Counter.jsx';

// actions
import * as ReduxDemoActions from '../store/actions/counter.js';     // 此处返回也是josn

import _ from 'lodash';

const MixActions = _.extend({}, ReduxDemoActions);

// console.log(ReduxDemoActions);
export default connect(
	(state) => { return {counter: state.counter} },   // 此处返回的必须是个 json   

	(dispatch) => { 
		// console.log(bindActionCreators(MixActions,dispatch));  // 此方法需要使用中间件
		return MixActions;
		// return ReduxDemoActions.forEach(e => () => e(dispatch));
	}   // 此处返回的必须是个 json   可以见57行下例
)(Counter);


// let mapStateToProps = (state) => { return state.counter };
// let mapDispatchToProps = (dispatch) => {
//		return {
//   		add:()=>dispatch({type:ADD}),
//   		sub:()=>dispatch({type:SUB})
// 		}
// }
// export default connect(mapStateToProps,mapDispatchToProps)(Counter);







/*
	这种写法更合理
	
	mapStateToProps  将state映射到组件    

	mapDispatchToProps  将actions(内置dispatch)映射到组件  
		调用this.props.add(
			add是actions.js的某个方法，
			用于触发dispatch(actionstype)，
			然后reducers根据dispatch的actionstype来做相应state的渲染)


*/











