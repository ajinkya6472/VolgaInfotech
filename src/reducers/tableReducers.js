import { data } from "../utils/mockData";

//States the initial state of the redux store
const initialState = {
    tableData: data,
    filter: ""
}


//Perform operation based on the action passed through the dispatch
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_NEW_ENTRY":
            return {
                ...state,
                tableData: [...state.tableData, action.payload]
            };
        case "DELETE_ENTRY":
            return {
                ...state,
                tableData: state.tableData.filter((_, index) => index !== action.payload)
            };
        case "FILTER_TABLE":
            return {
                ...state,
                filter: action.payload
            };
        default:
            return state;
    }
};