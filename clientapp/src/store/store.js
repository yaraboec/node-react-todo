import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import taskReducer from '../reducers/task.reducer';
import authReducer from '../reducers/auth.reducer';

const rootReducer = combineReducers({
  tasks: taskReducer,
  auth: authReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
