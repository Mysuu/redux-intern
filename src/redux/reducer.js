import { combineReducers } from "redux"
import filtersReducer from "../components/Filters/filtersSlice"
import todoReducer from "../components/Todolist/todoSlice"


const rootReducer = combineReducers({
    filters: filtersReducer,
    todoList: todoReducer
})

export default rootReducer