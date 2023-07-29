import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import store from "./Component/Redux/store.jsx";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "./ContextApi/Context.jsx";
let persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </PersistGate>
  </Provider>
  //  </React.StrictMode>
);
