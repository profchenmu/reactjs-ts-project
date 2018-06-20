import * as Type from '../constants/ActionType.js';
import { fetchJson } from 'src/utils/fetch.js';
// import { PRODUCT } from 'src/utils/api';

export function postTransfer (params) {
    if(params.confirmData == 'trans_out'){
        console.log(params)
        return dispatch => {
            fetchJson({
                success: (res) => {
                    // dispatch({
                    //     type: Type.GET_TRADING_PAIR_FORM,
                    //     payload: res
                    // })
                },
                type: 'POST',
                url: '/api/transfer_out',
                data: params
            })
        }
    }
    if(params.confirmData == 'trans_in'){
        console.log(params)
        return dispatch => {
            fetchJson({
                success: (res) => {
                    // dispatch({
                    //     type: Type.GET_TRADING_PAIR_FORM,
                    //     payload: res
                    // })
                },
                type: 'POST',
                url: '/api/transfer_in',
                data: params
            })
        }
    }
    
}

