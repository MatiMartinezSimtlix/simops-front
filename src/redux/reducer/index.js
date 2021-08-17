import { combineReducers } from "redux";

import { itemReducer } from "./item.reducer";
import { specificationReducer } from "./specification.reducer";

const reducer = combineReducers({
  itemReducer,
  specificationReducer,
});

export default reducer;
