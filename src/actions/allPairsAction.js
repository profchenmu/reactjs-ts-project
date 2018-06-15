import * as Type from '../constants/ActionType.js';
import { fetchJson } from 'src/utils/fetch.js';
// import { PRODUCT } from 'src/utils/api';

export function allPairs () {
    return dispatch => {
        // dispatch({
        //     payload: {a: 2, b: 3},
        //     type: Type.DEMO
        // })
        // dispatch({
        //     payload: {a: 2, b: 3},
        //     type: Type.DEMO
        // })
        let cao = fetchJson({
            success: (res) => {
                // if (!res || !res.length) {
                //     // StaticToast.error('暂无数据');
                //     return false;
                // }
                dispatch({
                    type: Type.ALL_PAIRS,
                    payload: res
                })
            },
            type: 'GET',
            url: '/api/all_pairs'
        })
    }
}

