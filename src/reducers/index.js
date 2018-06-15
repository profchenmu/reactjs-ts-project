import { combineReducers } from 'redux';
import allPairsReducer from './allPairsReducer.js';
import getTradingPairFormReducer from './getTradingPairFormReducer.js';
import demoReducer from './demoReducer.js';
import compareAccountListByPairReducer from './compareAccountListByPairReducer.js'

const rootReducer = combineReducers({
	// baseReducer
	demoReducer,
	allPairsReducer,
	getTradingPairFormReducer,
	compareAccountListByPairReducer
});

export default rootReducer
