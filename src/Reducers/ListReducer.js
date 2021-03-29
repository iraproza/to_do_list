const initialState = {
    ToDoList: [],
    currentItem: null
}

const ListReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LIST_LOADED":
            return {
                ...state,
                ToDoList: action.payload
            }
        case "ADD_NEW_ITEM":
            return {
                ...state,
                ToDoList: [
                    ...state.ToDoList,
                    action.payload]
            }
        case "UPDATE_ITEM":
            return{
                ...state,
                ToDoList: action.payload
            }
        case "EDIT_ITEM":
            return{
                ...state,
                ToDoList: action.payload
            }
        case "DELETE_ITEM":
            const listAfterDelete = state.ToDoList.filter((item) => {
                return item.Id !== action.payload;
            });
            // const searchNewList = state.searchList.filter((contact_item) => {
            //     return contact_item.Id !== action.payload;
            // });
            return{
                ...state,
                ToDoList: listAfterDelete
                // searchList: searchNewList
            }
        default:
            return state;
    }
}
export default ListReducer;