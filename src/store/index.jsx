import { createStore, combineReducers, applyMiddleware } from 'redux';
import { counter } from './reducers/counter.js';
import thunk from 'redux-thunk';
import reducers from './reducers/counter.js';

//把二个reducer合并成同一个reducer
let reducer = combineReducers({
    counter
});


let store = createStore(reducer);

/*
	console.log(store);
	store ==> {
		getState:()=>{},
		subscribe:()=>{ 返回取消监听},
		dispatch:()=>{},
		replaceReducer()=>{}
	}
*/

export {store};