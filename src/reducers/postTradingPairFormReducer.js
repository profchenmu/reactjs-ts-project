import * as Type from "../constants/ActionType.js";

// import FUC from "src/utils/func";

let initialState = {
    
};

export default (state = initialState, action)=>{
    switch (action.type){
        case Type.POST_TRADING_PAIR_FORM:
            return Object.assign({}, initialState, action.payload)
        case Type.INITSTATUS:
            return Object.assign({}, initialState, action.payload)
        default:
            return state;
    }
}

