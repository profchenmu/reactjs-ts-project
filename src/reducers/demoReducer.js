import * as Type from "../constants/ActionType.js";

// import FUC from "src/utils/func";

let initialState = {
    
};

export default (state = initialState, action)=>{
    console.log(action, 'aaaaaaa')
    switch (action.type){
        case Type.DEMO:
            return Object.assign({}, initialState, action.payload)
        // case Type.GET_PRODUCT_LIST:
        //     return FUC.extendObj(initialState, {productList: action.payload})

        default:
            return state;
    }
}

