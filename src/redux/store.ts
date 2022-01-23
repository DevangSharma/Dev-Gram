import { applyMiddleware, createStore , compose} from "redux";
import { reducer } from ".";
import thunk from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(
    reducer,
    {},
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);
