import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../features/Grid/reducer';

let rootReducers = combineReducers({
    grid: reducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
|| compose;

let store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
