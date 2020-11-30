import client from '../api/client';

// Actions
const SIGN_IN = 'account/SIGN_IN';

const initialState = {
  token: ''
}

// Reducer
export const accountReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        token: action.token
      }
    default:
      return state
  }
}

// Action Creators
const signIn = (token) => ({ 
  type: SIGN_IN,
  token: token
});

export const apiSignIn = (username, password) => async (dispatch, getState) => {
  // const token = getState.account.token;
  // console.log(token);
  const result = await client.authentication.getToken({
    username: username,
    password: password
  })
  // 'spree@example.com',
  // 'spree123'
  console.log(result.success())
  if (result.isSuccess()) {
    return dispatch(signIn(result.success().access_token));
  }
}

export default accountReducer;
