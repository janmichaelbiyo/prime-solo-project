const parksnplayidReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_PARKS_N_PLAY_ID':
      return action.payload;
    default:
      return state;
  }
};

export default parksnplayidReducer;
