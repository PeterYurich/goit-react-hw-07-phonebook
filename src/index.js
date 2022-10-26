import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from "react-redux";
import { store } from "./redux/store";

import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from 'redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <PersistGate loading={null} persistor={persistor} >
    <Provider store={store}>
      <App />
    </Provider>
  </PersistGate>
);
