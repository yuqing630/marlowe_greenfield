import React from 'react';
import {Modal, Button} from 'react-bootstrap';
class Trigger extends React.Component {
  render() {
    return (
      <Modal
        {...this.props}
        bsSize="large"
        aria-labelledby="contained-modal-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg">Your Donation Has Been Listed!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Thank You for Listing</h4>
         
          <p>
            You can expect to hear back from an eager receiver in a matter of days! It's thanks to 
            volunteers like you that .......
          </p>
    
          
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
export default Trigger;