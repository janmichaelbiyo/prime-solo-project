const parksnplayReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_PARKS_N_PLAY':
      return action.payload;
    default:
      return state;
  }
};

export default parksnplayReducer;
