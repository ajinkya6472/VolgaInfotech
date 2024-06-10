//Action types
const ADD_NEW_ENTRY = "ADD_NEW_ENTRY"
const DELETE_ENTRY = "DELETE_ENTRY"
const FILTER_TABLE = "FILTER_TABLE"

//Actions
export const addNewEntry = (data) => ({
    type: ADD_NEW_ENTRY,
    payload: data
})

export const deletEntry = (id) => ({
    type: DELETE_ENTRY,
    payload: id

})

export const filterTable = (char) => ({
    type: FILTER_TABLE,
    payload: char

})