import * as Type from "../constants/ActionType.js";

// import FUC from "src/utils/func";
/**
 * 基础数据处理reducer如：银行列表
 */
let initialState = {
    
};

export default (state = initialState, action)=>{
    switch (action.type){
        case Type.ADD_TRADING_PAIR:
            return Object.assign({}, initialState, action.payload)
        case Type.INITSTATUS:
            return Object.assign({}, initialState, action.payload)
        default:
            return state;
    }
}

