import { loggerMiddleware } from "../middleware/logger";
import { fetchUserSuccess, updateUserList } from "./action";
import { userReducer } from "./reducer";
import { createStore,applyMiddleware,compose } from 'redux';
import { thunk} from 'redux-thunk'



const composedEnhancers = compose(
    applyMiddleware(thunk),  // Middleware
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  // Redux DevTools
  );

export const store=createStore(userReducer,composedEnhancers)

console.log(store)
console.log(store.getState());




// store.dispatch(updateUserList({name:"bhavesh",age:29}))


