//see the di=ocumentation in https://redux.js.org/tutorials/fundamentals/part-4-store
//copy the structure
import { createStore } from 'redux';
import cartReducers from '../reducers/cartReducers';

const store = createStore(cartReducers)

export default store;
