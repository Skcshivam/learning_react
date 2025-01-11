import { createSlice, nanoid } from "@reduxjs/toolkit";
import { act } from "react";

const initialState ={
  todos:[{}]
}


export const todoSlice = createSlice({
  name : "todo",
  initialState,
  reducers : {
    addTodo :(state, action) => {
      const todo ={
        id :nanoid(),
        text: action.payload
      }
      state.todos.push(todo)
    },
    removeTodo : (state ,action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    },
    updateTodo : (state ,action) => {
      state.todos = (e) => {
        (e.target.value? state.todos : action.payload)
      }    }
  }
})

export const {addTodo , removeTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer