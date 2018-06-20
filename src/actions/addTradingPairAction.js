import * as Type from '../constants/ActionType.js';
import { fetchJson } from 'src/utils/fetch.js';
// import { PRODUCT } from 'src/utils/api';

export function addTradingPair (params) {
    const data = params;
    data.cancel = params.cancel?'Y':'N'
    return dispatch => {
        // dispatch({
        //     payload: {a: 2, b: 3},
        //     type: Type.DEMO
        // })
        // dispatch({
        //     payload: {a: 2, b: 3},
        //     type: Type.DEMO
        // })
        fetchJson({
            success: (res) => {
                // if (!res || !res.length) {
                //     // StaticToast.error('暂无数据');
                //     return false;
                // }
                // window.location.assign('/');
                // window.location.href = './'
                // window.location.push('/')
                dispatch({
                    type: Type.ADD_TRADING_PAIR,
                    payload: res
                })
            },
            type: 'POST',
            url: '/api/add_trading_pair',
            data: data
        })
    }
}

