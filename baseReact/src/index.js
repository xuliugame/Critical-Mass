import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Home from './pages/Home';
import Change from './pages/Change';
import Click from './pages/Click';
import Keypress from './pages/Keypress';
import Mousemove from './pages/Mousemove';
import Submit from './pages/Submit';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}>
          <Route index element={<Home/>}/>
          <Route path={'change'} element={<Change/>}/>
          <Route path={'click'} element={<Click/>}/>
          <Route path={'keypress'} element={<Keypress/>}/>
          <Route path={'mousemove'} element={<Mousemove/>}/>
          <Route path={'submit'} element={<Submit/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
