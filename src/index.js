import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './components/Redux/EarliStore';
import { Provider } from 'react-redux';
import persistStore from 'redux-persist/es/persistStore';
import { PersistGate } from 'redux-persist/integration/react';
import AuthProvider from './components/Redux/AuthProvider';

let persistor = persistStore(store);
ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          <App />
      </PersistGate>
    </Provider>
    </AuthProvider>
    
   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
