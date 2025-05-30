import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS, UPDATE_USER_LIST } from "./action";

// Initial state
export const initialState = {
  loading: false,
  user_list: [], // Initial user list is an empty array
  error: '', // No errors initially
};

// Reducer function to handle actions
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case FETCH_USER_REQUEST:
      return {
        ...state, 
        loading: true, // Set loading to true when data is being fetched
      };
   
      // Add users from fetched api to the user_list
    case FETCH_USER_SUCCESS:
      return {
        ...state, 
        loading: false, // Set loading to false when the fetch is complete
        user_list: action.payload // Update user_list with the fetched data
      };

    case FETCH_USER_FAILURE:
      return {
        ...state, // Keep the current state
        loading: false, // Set loading to false if there's an error
        error: action.payload, // Set error message
      };

    // Adding new user to the list 
    case UPDATE_USER_LIST:
      return {
        ...state,
        user_list: [...state.user_list, action.payload], // Append new user to the existing list
      };

    default:
      return state; // Return the current state if no matching actions
  }
};
