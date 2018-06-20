import * as Type from '../constants/ActionType.js';
import { fetchJson } from 'src/utils/fetch.js';
// import { PRODUCT } from 'src/utils/api';

export function getTradingPairForm (params) {
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
                    type: Type.GET_TRADING_PAIR_FORM,
                    payload: res.result
                })
            },
            type: 'GET',
            url: '/api/get_trading_pair_form',
            data: {pair_id: params.id}
        })
    }
}

export function postTradingPairForm (params) {
    return dispatch => {
        // dispatch({
        //     payload: {a: 2, b: 3},
        //     type: Type.DEMO
        // })
        // dispatch({
        //     payload: {success: 0},
        //     type: Type.POST_TRADING_PAIR_FORM
        // })
        fetchJson({
            success: (res) => {
                // window.location.assign('/');
                // if (!res || !res.length) {
                //     // StaticToast.error('暂无数据');
                //     return false;
                // }
                dispatch({
                    type: Type.POST_TRADING_PAIR_FORM,
                    payload: res
                })
            },
            type: 'POST',
            url: '/api/post_trading_pair_form',
            data: params
        })
    }
}

