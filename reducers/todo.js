export const initialState = {
  todos: [
    {
      id: 1,
      title: "Eat launch",
    },
    {
      id: 2,
      title: "Learn Next.js",
    },
  ],
};

const ADD_TODO = "ADD_TODO";

export const addTodo = {
  type: ADD_TODO,
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return {
        ...state,
      };
  }
};
