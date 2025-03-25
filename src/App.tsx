import React from 'react';
import './App.css';
import MainPage from "./pages/MainPage/MainPage";
import store from "./store/store";
import {Provider} from "react-redux";

function App() {
  return (
      <Provider store={store}>
        <MainPage/>
      </Provider>
  );
}

export default App;
