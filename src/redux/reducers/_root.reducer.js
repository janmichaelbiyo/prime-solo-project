import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import location from './location.reducer';
import parksnplay from './parksnplay.reducer';
import review from './review.reducer';
import inclusive from './inclusive.reducer';
import parksnplayid from './parksnplayid.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  location, //will have all the information of the location for the map
  parksnplay, //will have the specific info from each parks and playground
  review, // will have review info
  inclusive, //will have inclusive info
  parksnplayid, // a reducer that holds the parksnplayid from the click
});

export default rootReducer;
