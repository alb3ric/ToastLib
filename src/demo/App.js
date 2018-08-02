import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DebugToast } from '../lib';

const App = () => {
  return (
  <div>
    <div>
      <DebugToast />
    </div>
    <ToastContainer/>
  </div>
);
}

export default App;
