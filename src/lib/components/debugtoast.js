import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { toast } from 'react-toastify';

class DebugToast extends Component {

  render() {
    return (
    <div>
      <Button onClick={() => toast.Info('test', { autoClose : 10000 })}>TEST</Button>
    </div>
    );
  }
}


export default DebugToast;