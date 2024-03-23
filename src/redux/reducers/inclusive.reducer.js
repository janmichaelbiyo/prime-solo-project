const inclusiveReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_INCLUSIVE':
      return action.payload;
    default:
      return state;
  }
};

export default inclusiveReducer;
