const initialState = {
    ToDoList: []
}

const ListReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LIST_LOADED":
            return {
                ToDoList: action.payload
            }

        default:
            return state;
    }
}
export default ListReducer;