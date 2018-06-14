import * as Type from "../constants/ActionType.js";

// import FUC from "src/utils/func";
/**
 * 基础数据处理reducer如：银行列表
 */
let initialState = {
    
};

export default (state = initialState, action)=>{
    console.log(action)
    switch (action.type){
        case Type.DEMO:
            return Object.assign({}, initialState, action.payload)
        default:
            return state;
    }
}

