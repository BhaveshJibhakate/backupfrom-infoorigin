import { REGISTER_USER, REGISTER_SUCCESS, REGISTER_FAILURE } from "./actions";

const initialState = {
  userData: null,
  loading: false,
  error: null,
};

export const registrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return { ...state, loading: true, error: null };
    case REGISTER_SUCCESS:
      return { ...state, loading: false, userData: action.payload };
    case REGISTER_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
