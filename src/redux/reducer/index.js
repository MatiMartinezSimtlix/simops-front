import { combineReducers } from "redux";

import { itemReducer } from "./item.reducer";
import { collaboratorReducer } from "./collaborator.reducer";

const reducer = combineReducers({
  itemReducer,
  collaboratorReducer,
});

export default reducer;
