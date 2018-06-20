import { combineReducers } from 'redux';
import allPairsReducer from './allPairsReducer.js';
import getTradingPairFormReducer from './getTradingPairFormReducer.js';
import postTradingPairFormReducer from './postTradingPairFormReducer.js';
import demoReducer from './demoReducer.js';
import compareAccountListByPairReducer from './compareAccountListByPairReducer.js'
import addTradingPairReducer from './addTadingPairReducer';

const rootReducer = combineReducers({
	// baseReducer
	demoReducer,
	allPairsReducer,
	getTradingPairFormReducer,
	postTradingPairFormReducer,
	compareAccountListByPairReducer,
	addTradingPairReducer
});

export default rootReducer
