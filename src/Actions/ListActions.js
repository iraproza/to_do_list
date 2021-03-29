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

  export const updateItem = (ToDoList) => {
    return {
      type: "UPDATE_ITEM",
      payload: ToDoList
    }
  }
  export const deleteItem = (Id) => {
    return {
        type: "DELETE_ITEM",
        payload: Id
    }
}

  export const editItem = (ToDoList) => {
    return{
        type: "EDIT_ITEM",
        payload: ToDoList
    }
  }