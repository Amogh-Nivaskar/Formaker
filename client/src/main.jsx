import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import store from "./store/store.js";

import { Provider } from "react-redux";
import { AuthProvider } from "./contexts/UserAuth.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <AuthProvider>
      <App />
    </AuthProvider>
  </Provider>
);
