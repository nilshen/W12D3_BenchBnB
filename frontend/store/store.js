import { applyMiddleware, createStore } from "redux";



const configureStore = (preloadedState = {}) => {
    return createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger))
}

export default configureStore