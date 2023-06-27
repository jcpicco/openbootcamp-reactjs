import React, { createContext, useReducer } from "react";
import { Task } from "../../models/task.class";
import { LEVELS } from "../../models/levels.enum";

/* Creating a context object. */
export const TaskContext = createContext();

/* A constant that is used to identify the action type. */
const ADD_TASK = "ADD_TASK";
const REMOVE_TASK = "REMOVE_TASK";
const FILTER_TASK = "FILTER_TASK";

const taskReducer = (state, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload.id),
        filteredTasks: state.filteredTasks.filter(
          (task) => task.id !== action.payload.id
        ),
      };
    case FILTER_TASK:
      const filteredTasks = state.tasks.filter((task) =>
        task.name.toLowerCase().includes(action.payload.toLowerCase())
      );
      return { ...state, filteredTasks };
    default:
      return state;
  }
};

export const TaskProvider = ({ children }) => {
    const defaultTask1 = new Task('Example1', 'Description1', true, LEVELS.NORMAL);
    const defaultTask2 = new Task('Example2', 'Description 2', false, LEVELS.URGENT);
    const defaultTask3 = new Task('Example3', 'Description 3', false, LEVELS.BLOCKING);

    const initialState = [defaultTask1, defaultTask2, defaultTask3];
    const [state, dispatch] = useReducer(taskReducer, {
        tasks: initialState,
        filteredTasks: initialState,
    });

    const addTask = (task) => {
        dispatch({ type: ADD_TASK, payload: task });
    };

    const removeTask = (task) => {
        dispatch({ type: REMOVE_TASK, payload: task });
    };

    const filterTask = (query) => {
        dispatch({ type: FILTER_TASK, payload: query });
    };

    return (
        <TaskContext.Provider
        value={{
            tasks: state.filteredTasks.length ? state.filteredTasks : state.tasks,
            addTask,
            removeTask,
            filterTask,
        }}
        >
        {children}
        </TaskContext.Provider>
    );
};