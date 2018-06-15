import * as Type from '../constants/ActionType.js';
import { fetchJson } from 'src/utils/fetch.js';
// import { PRODUCT } from 'src/utils/api';

export function compareAccountListByPair (params) {
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
            success: (resNow) => {
                fetchJson({
                    success: (res) => {
                        // if (!res || !res.length) {
                        //     // StaticToast.error('暂无数据');
                        //     return false;
                        // }
                        const allResData = {compareDatas: [resNow, res]}
                        dispatch({
                            type: Type.COMPARE_ACCOUNT_LIST_BY_PAIR,
                            payload: allResData
                        })
                    },
                    type: 'GET',
                    url: '/api/account_list_by_pair',
                    data: {pair_id: params.id, ts: params.ts}
                })
            },
            type: 'GET',
            url: '/api/account_list_by_pair',
            data: {pair_id: params.id}
        })
    }
}

