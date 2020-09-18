export let initialState = [
  {
    name: "Learn about Reducers!",
    completed: false,
    id: Date.now(),
  },
];

export let reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      let newTodo = {
        name: action.payload,
        completed: false,
        id: Date.now(),
      };
      return [...state, newTodo];
    case "TOGGLE_TODO":
      return state.map((item) => {
        if (action.payload === item.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      });
    case "CLEAR_SELECTED":
      return state.filter((item) => {
        return !item.completed;
      });
    case "CLEAR_ALL":
      return [];
    default:
      return state;
  }
};

//export to TODOLIST.JS
