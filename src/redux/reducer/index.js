import { combineReducers } from "redux";

import { itemReducer } from "./item.reducer";
import { collaboratorReducer } from "./collaborator.reducer";
import { specificationReducer } from "./specification.reducer";
import { accessoryReducer } from "./accessory.reducer";

const reducer = combineReducers({
  itemReducer,
  collaboratorReducer,
  specificationReducer,
  accessoryReducer,
});

export default reducer;
