  export const getAllList = (ToDoList) => {
    return {
        type: "LIST_LOADED",
        payload: ToDoList
    }
  }

  export const addNewItem = (item) => {
    return {
        type: "ADD_NEW_ITEM",
        payload: item
    }
}