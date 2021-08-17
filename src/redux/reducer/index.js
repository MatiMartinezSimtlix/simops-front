import { combineReducers } from "redux";

import { itemReducer } from "./item.reducer";

const reducer = combineReducers({
  itemReducer,
});

export default reducer;
