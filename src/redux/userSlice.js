import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: '',
  todoList: [], // Nuova lista di attività
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    registerUser: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    logoutUser: (state) => {
      state.name = '';
      state.email = '';
      state.todoList = []; // Reset lista attività quando si effettua il logout
    },
    addTask: (state, action) => {
      state.todoList.push(action.payload); // Aggiungi una nuova attività
    },
    removeTask: (state, action) => {
      state.todoList = state.todoList.filter(task => task.id !== action.payload); // Rimuovi attività
    },
  },
});

export const { registerUser, logoutUser, addTask, removeTask } = userSlice.actions;
export default userSlice.reducer;
