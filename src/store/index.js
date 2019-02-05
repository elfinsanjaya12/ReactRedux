import { createStore } from "redux";
import reducers from "./reducers";

// createStore membutuhkan reducers
const store = createStore(reducers);

export default store;
