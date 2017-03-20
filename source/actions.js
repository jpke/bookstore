import * as types from './actionTypes';

export function selectNewBook(newBook) {
  return {
    type: types.SELECT_NEW_BOOK,
    newBook
  };
}

export function submitInfo(info, type, option) {
  if(type === 'AdminAddBook') {
    if(info.title === "" || info.author === "") return;
    return {
      type: types.ADMIN_ADD_BOOK,
      info
    };
  }
  else if(type === 'UserInfo') {
    return {
      type: types.USER_INFO,
      info
    };
  }
  else if(type === 'Delivery') {
    //use delivery address as billing address?
    option ?
      function(dispatch) {
        dispatch({
          type: types.DELIVERY,
          info,
          useDeliveryAddressAsBilling: true
        })
        dispatch({
          type: types.BILLING,
          info,
        })
      }
    :
      function(dispatch) {
        dispatch({
          type: types.DELIVERY,
          info,
          useDeliveryAddressAsBilling: false
        })
      }
  }
  else if(type === 'Billing') {
    return {
      type: types.BILLING,
      info
    };
  }
  else if(type === 'PaymentInfo') {
    return {
      type: types.PAYMENT_INFO,
      info
    };
  }
  else if(type === 'SubmitOrder') {
    return {
      type: types.SUBMIT_ORDER,
      info
    };
  }
}
