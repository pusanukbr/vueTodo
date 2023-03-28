const URL = "https://jsonplaceholder.typicode.com";

export default {
  async getUsers() {
    try {
      const response = await fetch(`${URL}/users`);
      const users = await response.json();
      return users;
    } catch (error) {
      return console.log(`Server users error: ${error}`);
    }
  },
  async getTodoList() {
    try {
      const response = await fetch(`${URL}/todos`);
      const list = await response.json();
      return list;
    } catch (error) {
      return console.log(`Server todo error: ${error}`);
    }
  },
  async addTodo(newTodo) {
    try {
      const response = await fetch(`${URL}/todos`, {
        method: "POST",
        body: JSON.stringify({
          ...newTodo,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const newList = await response.json();
      return newList;
    } catch (error) {
      return console.log(`Server todo error: ${error}`);
    }
  },
};
