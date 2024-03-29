const reviewReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_REVIEW_ID':
      return action.payload;
    default:
      return state;
  }
};

export default reviewReducer;
