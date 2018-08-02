import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DebugToast, DebugToastRef } from '../lib';
import { toast } from 'react-toastify';

const App = () => {
  return (
  <div>
    <div>
      <DebugToast />
      {' '}
      <DebugToastRef toast={toast}/>
    </div>
    <ToastContainer/>
  </div>
);
}

export default App;
