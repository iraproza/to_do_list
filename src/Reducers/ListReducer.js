const initialState = {
    ToDoList: [],
    currentItem: null,
    searchList: [],
    valueSearch: ''
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
                searchList: [],
                currentItem: action.payload
            }
        case "DELETE_ITEM":
            const listAfterDelete = state.ToDoList.filter((item) => {
                return item.Id !== action.payload;
            });
            const searchNewList = state.searchList.filter((item) => {
                return item.Id !== action.payload;
            });
            return{
                ...state,
                ToDoList: listAfterDelete,
                searchList: searchNewList
            }
        case "SEARCH_ITEM":
            const tmpList = state.ToDoList.slice();
            let newList = tmpList.filter((item) => {
                return item.Description.toLowerCase().indexOf(action.payload.toLowerCase()) > -1;
            });
            if (newList.length === 0) {
                return {
                    ...state,
                    searchList: [],
                    valueSearch: action.payload
                }
            } else {
                return {
                    ...state,
                    searchList: newList,
                    valueSearch: action.payload
                }
            }

        default:
            return state;
    }
}
export default ListReducer;