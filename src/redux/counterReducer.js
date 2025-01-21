// src/redux/counterReducer.js

const initialState = {
  count: 0,
  user: { name: 'nome', email: 'email' }
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    case 'SET_USER':
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default counterReducer;
