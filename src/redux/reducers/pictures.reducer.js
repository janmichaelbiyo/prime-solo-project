const picturesReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_PICTURES':
      return action.payload;
    default:
      return state;
  }
};

export default picturesReducer;
