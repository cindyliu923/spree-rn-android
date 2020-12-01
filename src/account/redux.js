import client from '../api/client';

// Actions
const SIGN_IN = 'account/SIGN_IN';
const SIGN_OUT = 'account/SIGN_OUT';
const GET_EMAIL = 'account/GET_EMAIL';
const GET_ORDER = 'account/GET_ORDER';

const initialState = {
  bearerToken: '',
  email: '',
  orderList: []
}

// Reducer
export const accountReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        bearerToken: action.bearerToken,
      }
    case SIGN_OUT:
      return {
        ...state,
        bearerToken: ''
      }
    case GET_EMAIL:
      return {
        ...state,
        email: action.email
      }      
    case GET_ORDER:
      return {
        ...state,
        orderList: action.orderList
      }      
    default:
      return state
  }
}

// Action Creators
const signIn = (bearerToken) => ({ 
  type: SIGN_IN,
  bearerToken: bearerToken
});

export const signOut = () => ({ 
  type: SIGN_OUT
});

const getEmail = (email) => ({ 
  type: GET_EMAIL,
  email: email
});

const getOrder = (orderList) => ({ 
  type: GET_ORDER,
  orderList: orderList
});

export const apiSignIn = (username, password) => async (dispatch) => {
  const result = await client.authentication.getToken({
    username: username,
    password: password
  })
  // 'spree@example.com',
  // 'spree123'
  console.log(result.success())
  if (result.isSuccess()) {
    dispatch(signIn(result.success().access_token));
    return dispatch(getAccountInfo(result.success().access_token));
  }
}

export const getAccountInfo = (bearerToken) => async (dispatch) => {
  const result = await client.account.accountInfo({ bearerToken })
  if (result.isSuccess()) {
    console.log(result.success());    
    return dispatch(getEmail(result.success().data.attributes.email));
  }
}

export const getOrdersList = (bearerToken) => async (dispatch) => {
  const result = await client.account.completedOrdersList({ bearerToken })
  if (result.isSuccess()) {
    console.log(result.success());    
    return dispatch(getOrder(result.success().data));
  }
}

export default accountReducer;
