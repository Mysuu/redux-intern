// import { createStore } from "redux";
// import rootReducer from "./reducer";
// import { composeWithDevTools } from 'redux-devtools-extension'

// const composedEnhances = composeWithDevTools()

// const store = createStore(rootReducer, composedEnhances)
// //là func cập nhật gtri state trong kho chung dựa trên các action hiện tại, xét giá trị mặc định nào đó, cấu hình middleware 

// export default store

import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from '../components/Filters/filtersSlice'
import todoReducer from "../components/Todolist/todoSlice";

const store = configureStore({
    reducer: {
        filters: filtersReducer.reducer,
        todoList: todoReducer.reducer
    }
})

export default store