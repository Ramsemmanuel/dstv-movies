import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';

export default function configureStore() {
    // return createStore(
    //     rootReducer,
    //     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    //     applyMiddleware(thunk)
    // );
    let initialState = {};
    const middleware = [thunk];
    return createStore(
        rootReducer,
        initialState,
        compose(applyMiddleware(...middleware),
            window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__())
    );
}