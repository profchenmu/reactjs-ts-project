import * as Type from '../constants/ActionType.js';
import { fetchJson } from 'src/utils/fetch.js';
// import { PRODUCT } from 'src/utils/api';

export function init (params) {
    return dispatch => {
        dispatch({
            payload: {success: 1},
            type: Type.INITSTATUS
        })
        
    }
}

