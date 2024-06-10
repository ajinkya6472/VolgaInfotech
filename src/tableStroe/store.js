import { createStore } from "redux";
import { reducer } from "../reducers/tableReducers";

export const store = createStore(reducer)

