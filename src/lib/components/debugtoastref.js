import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class DebugToastRef extends Component {

  render() {
    return (
    <div>
      <Button onClick={() => this.props.toast.info('test ref', { autoClose : 10000 })}>TEST WITH REF</Button>
    </div>
    );
  }
}


export default DebugToastRef;