import { configureStore } from "@reduxjs/toolkit";
import newFormReducer from "./slices/newForm";
import ansFormReducer from "./slices/ansForm";
import submissionsReducer from "./slices/viewSubmissions";

const store = configureStore({
  reducer: {
    newForm: newFormReducer,
    ansForm: ansFormReducer,
    viewSubmissions: submissionsReducer,
  },
});

export default store;
