import { put, takeLatest, delay } from "redux-saga/effects";
import { REGISTER_USER, registerSuccess, registerFailure } from "./actions";

function* registerUserSaga(action) {
  try {
    yield delay(2000); // Simulating API Call
    console.log("User Registered:", action.payload);
    yield put(registerSuccess(action.payload));
  } catch (error) {
    yield put(registerFailure("Registration Failed!"));
  }
}

export function* rootSaga() {
  yield takeLatest(REGISTER_USER, registerUserSaga);
}
