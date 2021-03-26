URL = "https://todolist-a9d6d-default-rtdb.firebaseio.com/ToDoList.json"

export const upDatabase = () => {
    const data = fetch(URL)
        .then(responce => {
            return responce.json();
        }).then(data => {
            if (data !== null) {
                return data
            } else {
                return []
            }
        })
        .catch(err => {
            return err
        })
    return data;
}

export const saveData = (ToDoList) => {
    const response = fetch(URL, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(ToDoList),
    }).then(response => {
        return response;
    }).catch(err => {
        return err;
    });
    return response;
  }