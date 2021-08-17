import { combineReducers } from "redux";

import { itemReducer } from "./item.reducer";
import { collaboratorReducer } from "./collaborator.reducer";
import { specificationReducer } from "./specification.reducer";

const reducer = combineReducers({
  itemReducer,
  collaboratorReducer,
  specificationReducer,
});

export default reducer;
