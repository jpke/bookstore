import * as types from './actionTypes';

export const initialState = {
   userInfo: {
     firstName: "",
     lastName: "",
     email: ""
   },
   deliveryAddress: {
     lineOne: "",
     lineTwo: "",
     city: "",
     state: "",
     zip: ""
   },
   useDeliveryAddressAsBilling: false,
   billingAddress: {
     lineOne: "",
     lineTwo: "",
     city: "",
     state: "",
     zip: ""
   },
   creditCardInfo: {
     nameOnCard: "",
     cardNumber: "",
     securityCode: ""
   },
   availableBooks: [
     {
       title: "The Evolution of Civilizations",
       author: "Carroll Quigley",
     },
     {
       title: "How the Mind Works",
       author: "Stephan Pinker",

     }
   ],
   orders: [
     {
       title: "The Lexus and the Olive Tree",
       author: "Thomas Friedman",
       date: new Date("Sat Mar 18 2017 16:38:08 GMT-0400 (EDT)")
     },
     {
       title: "Wit and Wisdom",
       author: "Toby Reynolds",
       date: new Date("Fri Mar 17 2017 16:40:30 GMT-0400 (EDT)")
     }
   ],
   bookToOrder: "",
   newBook: {
     title: "",
     author: ""
   }
 }

 export default function reducer(state = initialState, action) {
   //declare vars
   let newOrder, orders, books;

   switch(action.type) {

    case types.SELECT_NEW_BOOK:
      return {
        ...state,
      bookToOrder: action.newBook
      };
    case types.ADMIN_ADD_BOOK:
      books = state.availableBooks.concat(action.info);
      return {
        ...state,
        availableBooks: books
      };
    case types.USER_INFO:
      return {
        ...state,
        userInfo: action.info
      };
    case types.DELIVERY_AND_BILLING:
      return {
        ...state,
        deliveryAddress: action.info,
        billingAddress: action.info,
        useDeliveryAddressAsBilling: action.useDeliveryAddressAsBilling
      };
    case types.DELIVERY:
      return {
        ...state,
        deliveryAddress: action.info,
        useDeliveryAddressAsBilling: action.useDeliveryAddressAsBilling
      };
    case types.BILLING:
      return {
        ...state,
        billingAddress: action.info
      };
    case types.PAYMENT_INFO:
      return {
        ...state,
        creditCardInfo: action.info
      };
    case types.SUBMIT_ORDER:
      newOrder = Object.assign({}, action.info);
      newOrder.date = new Date();
      orders = state.orders.concat(newOrder);
      books = state.availableBooks.slice();
      books = books.filter(book => book.title !== newOrder.title)
      return {
        ...state,
        orders: orders,
        availableBooks: books
      };

    default:
     return state;
   }
 }
