const inclusiveagainReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_INCLUSIVE_AGAIN':
      return action.payload;
    default:
      return state;
  }
};

export default inclusiveagainReducer;
