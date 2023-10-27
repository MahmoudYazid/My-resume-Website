import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Gui from './Gui';
import File from './intro/file';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <File></File>,
  },
  {
    path: "/cmd",
    element: <App></App>,
  },{
    path:'/gui',
    element: <Gui></Gui>
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
