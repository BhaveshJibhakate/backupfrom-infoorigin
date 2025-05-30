// 1. Action Types
export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';
export const UPDATE_USER_LIST= 'UPDATE_USER_LIST';

// Action creator for requesting user data
export const fetchUserRequest = () => ({
    type: FETCH_USER_REQUEST,
  });
  
  // Action creator for successful user data fetch from api
  export const fetchUserSuccess = (users) => ({
    type: FETCH_USER_SUCCESS,
    payload: users, // This will be the array of users fetched from the API
  });
  
  // Action creator for failed user data fetch
  export const fetchUserFailure = (error) => ({
    type: FETCH_USER_FAILURE,
    payload: error, // Error message when fetching fails
  });
  
  // Action creator for adding a new user to the list
  export const updateUserList = (newUser) => ({
    type: UPDATE_USER_LIST,
    payload: newUser, // This will be the new user object to add to the list
  });


  export const fetchUsers = () => {
    return (dispatch) => {
      // Dispatch request action to indicate API call has started
      dispatch({ type: FETCH_USER_REQUEST });
  
      fetch('https://api.escuelajs.co/api/v1/users')
        .then((response) => response.json())  // Parse the response as JSON
        .then((data) => {
          // Dispatch success action with the fetched data
          dispatch(fetchUserSuccess(data));
        })
        .catch((error) => {
          // Dispatch failure action if there's an error
          dispatch({ type: FETCH_USER_FAILURE, payload: error });
        });
    };
  };
  