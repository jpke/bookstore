import * as types from './actionTypes';

export function selectNewBook(newBook) {
  return {
    type: types.SELECT_NEW_BOOK,
    newBook
  };
}

function deliveryAddress(info, useDeliveryAddressAsBilling) {
  return {
    type: types.DELIVERY,
    info,
    useDeliveryAddressAsBilling
  };
}

function billingAddress(info) {
  return {
    type: types.BILLING,
    info,
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
    if(option) {
      //use delivery address as billing address
      return {
        type: types.DELIVERY_AND_BILLING,
        info,
        useDeliveryAddressAsBilling: option
      };
    }
    else {
      return {
        type: types.DELIVERY,
        info,
        useDeliveryAddressAsBilling: option
      };
    }
  }
  else if(type === 'Billing') {
    return {
      type: types.BILLING,
      info,
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
