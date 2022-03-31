// const initState = {
//     todoList: [
// { id: 1, name: 'Rửa bát', completed: false, priority: 'Medium' },
// { id: 2, name: 'Lau nhà', completed: true, priority: 'High' },
// { id: 3, name: 'Nấu cơm', completed: false, priority: 'Low' }
//     ]
// }

// const todoReducer = (state = initState, action) => {
//     switch (action.type) {
//         case 'todoList/addTodo':
//             return [...state, action.payload]

//         default:
//             return state
//     }
// }

// export default todoReducer
import { createSlice } from '@reduxjs/toolkit';

export default createSlice({
    name: 'todoList',
    initialState: [
        { id: 1, name: 'Learn Yoga', completed: false, priority: 'Medium' },
        { id: 2, name: 'Learn Redux', completed: true, priority: 'High' },
        { id: 3, name: 'Learn JavaScript', completed: false, priority: 'Low' },
    ],
    reducers: { // IMMER
        addTodo: (state, action) => {
            state.push(action.payload);
        }, // action creators
        toggleTodoStatus: (state, action) => {
            const currentTodo = state.find(todo => todo.id === action.payload);
            if (currentTodo) {
                currentTodo.completed = !currentTodo.completed;
            }
        }
    }
});