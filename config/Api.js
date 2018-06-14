module.exports = {
  COMMON: {
    GET_DICT: '/dict/getDict',
    GET_BANK: '/dict/getBankCode',
    GET_AREA: '/dict/getDict',
    GET_NATION: '/dict/getDict',
    GET_OCCUPATION: '/dict/getOccupa',
    GET_COUNTRY_LISY: '/dict/getCountryList'
    // "GET_POST_CODE" : "/dict/getPostCode",
  },
  SIGNINFO: {
    POST_LOADCASIGN: '/insure/loadImage', // 1.12团单回显签名接口
    POST_SVECASIGN: '/insure/saveSign', // 1.13团单保存签名接口
    POST_SAVECERTIMAGES: '/insure/saveImage', // 1.14保存影像接口
    POST_DELECERTIMAGES: '/insure/deleteImage', //1.15删除影像接口
    GET_BEN_ID : '/insure/generateId',

 
  },
  PRODUCT: {
    SIGN_TO_PAY: '/groupPolicy/signToPay',
    BANK_CARD_OCR: '/groupPolicy/bankCardOCR',
    INSURE: '/groupPolicy/insure',
    GET_BANNERLIST: '/insure/bannerList',
    GET_PRODUCT_LIST: '/insure/productList',
    GET_BANNER_LIST: '/insure/bannerList',
    GET_PRODUCT_DETAIL: '/insure/productDetails',
    GET_CALCULATE_RESULT: '/insure/calculatePremium',
    GET_HEALTH_NOTIFY: '/insure/questList',
    GET_PLAN_LIST: '/insure/initInsure',
    POST_INSURE_SAVECASIGN: '/insure/saveCASign',
    INSURE_SERVICE: '/insure/insure',
    EDIT_INSURE: '/insure/editInsure',
    INSURE_PAY: '/insure/pay',
    GET_SHARE_INFO: '/insure/share',
    TEMPLATE_SAVE_PLAN: '/insure/tempSavePlan',
    GET_QUESTIONNAIRE: '/insure/cqQuestList',
    CARD_OCR: '/insure/identityCardOCR',
    BANK_OCR: '/insure/bankCardOCR',
    BIRTH_IMG_UPLOAD: '/insure/birthImgUpload',
    POST_APPLYNO: '/insure/getApplyNo',
    GET_LOAD: '/insure/load',
    TEMPSAVEBANKINFO: '/insure/tempSaveBankInfo',
    INSURE_QUERY: '/insure/query',
    GET_NOTICE_STATICE_MODAL: '/insure/initImpart',
    GET_NOTICE_DETAIL_MODAL: '/insure/loadImpart',
    SUBMIT_DETAIL_NOTICE: '/insure/saveImpart',
    MANUAL_UNDERWRITING: '/insure/manualUnderwriting',
    QUERY_RESP_STATUE: '/insure/queryAcknowledge',
    INSURE_SIGN_TO_PAY: '/insure/signToPay', // 个险获取支付信息
    GET_INSURE_AREA:'/area/getInsureArea',  // 限制投保地区
    VIDEORECORDCONFIRM: '/insure/showVideoRecordConfirm', //  1.4录音录像确认书接口
    DISCLAIMEERCONFIRM: '/insure/showDisclaimerConfirm', // 免责确认书接口
  
    RISK_SAVE_CONTRACT: '/borrowRisk/saveImage', // 1.1	合同影像上传接口
    RISK_LOAD_CONTRACT: '/borrowRisk/loadImage', // 1.2	合同load接口
    RISK_DELETE_CONTACT: '/borrowRisk/deleteImage', // 1.3	删除合同影像接口
    RISK_SAVE_SIGN: '/borrowRisk/saveCASign', // 1.4	签名上传接口
    RISK_GENERATE_BARCODE: '/borrowRisk/generateBarcode', // 1.5	生成二维码图片地址接口
    RISK_INIT_IMPART: '/borrowRisk/initImpart', // 1.6	告知初始化接口
    RISK_LOAD_INSURE: '/borrowRisk/loadInsure', // 1.7	load接口
    RISK_EDIT_INSURE: '/borrowRisk/editInsure', //1.8	投保录入接口 calculatePremium
    RISK_CALC_INSURE: '/borrowRisk/calculatePremium', //1.8	计算保费
    RISK_OCR_INSURE: '/borrowRisk/idCardOCR', //1.8	OCR
    RISK_PAY_INSURE: '/borrowRisk/signToPay', // 支付页面
    RISK_Bank_INSURE: '/borrowRisk/bankCardOCR', // 银行ocr /groupPolicy/insure
    RISK_INSURE_INSURE: '/borrowRisk/insure', // 支付立即投保 /wechatPay/pay/orderPay
    RISK_WX_PAY: '/wechatPay/pay/orderPay',
    RISK_QUERY_INSURE: '/borrowRisk/queryInsureResult', // 1.14承保结果轮询接口
    RISK_ADD_BEN: '/borrowRisk/genInsurantId', // 受益人id 
    RISK_CHECKUP_LOAD: '/borrowRisk/checkCertUpload'

  },
  LOGIN: {
    LOGIN: '/account/login',
    FEEDBACK: '/account/feedback',
    BIND_WECHAT: '/account/bindWeChat',
    PWD_UPDATE: '/account/updatePassword'
  },
  PLAN: {
    GET_PRODUCT_PROPOSAL: '/proposal/proposal',
    INIT_PROPOSAL: '/proposal/initProposal',
    EDIT_PROPOSAL: '/proposal/editProposal',
    POST_PROPOSAL: '/proposal/proposal',
    PRINT_PDF: '/proposal/printPdf'
  },
  SERVICE: {
    CUSTOMER_SERVICE: '/exclusiveSer/customerService',
    POST_AGENT_INFO: '/exclusiveSer/agentInfo',
    POST_ACCOUNT_LIST: '/insure/queryAUOrderList',
    //"ORDER_LIST" : "/exclusiveSer/orderList",
    ORDER_LIST: '/insure/queryOrderList',
    POST_MESSAGE_LIST: '/exclusiveSer/messageList',
    POST_MESSAGE_REMIND: '/exclusiveSer/messageRemind',
    POST_PRODUCT_LIST: '/insure/productList',
    POST_POLICYLIST: '/exclusiveSer/policyList',
    POST_RENEWAL_LIST: '/exclusiveSer/renewalList',
    POST_QUESTIONS_LIST: '/exclusiveSer/offendingFileList',
    POST_ACKNOWLEDGE: '/insure/acknowledge',
    POST_SEND_SMS: '/sms/send',
    POST_SEND_SMS_2: '/sms/send',
    POST_REPAY: '/insure/pay',
    INSURE_LOAD: '/insure/load',
    POST_Del_List: '/insure/deleteOrderById',
    POST_Query_List: '/exclusiveSer/issueQuery',
    GET_SHARE_URL: '/entryShare/invitationShare',
    GET_INVITER_PROGRESS_LIST: '/entryShare/invitationQuery',
    INDENTITY_CARD_OCR: '/entryShare/identityCardOCR',
    BANK_CARD_OCR: '/entryShare/bankCardOCR',
    LOAD_REGISTER_INFO: '/entryShare/loadInvitationInfo',
    SAVE_INVITE_INFO: '/entryShare/saveInvitationInfo',
    GET_OPEN_ID_PORT: '/oauth/getRedirectUrl',
    UPLOAD_PHTOTO_IMAGE: '/entryShare/imgUpload',
    DELETE_PHTOTO_IMAGE: '/entryShare/imgDelete',
    THUMBNAIL_PHOTO: '/entryShare/imageLoad',
    SEND_MESSAGE_CODE: '/entryShare/sendSms',
    OPEN_ACCOUNT_SHARE: '/entryShare/accountShare',
    CONPRENHENSION_SUBMIT: '/entryShare/infoSubmit',
    GET_BANK_CODE_SHARE: '/entryShare/getBankCode',
    GET_CONTRACT_PDF: '/entryShare/getEntryPdf',
    POST_LAYOUT: '/account/updateBound', // 登出
    POST_INSUREREASON: '/combinationRisk/insureErrorReason',
    POST_WRITING: '/combinationRisk/manualUnderwriting'
  }
}
