import { combineReducers } from 'redux';
import personsList from './persons-list';

const reducers = combineReducers({
  personsList,
});

export default reducers;