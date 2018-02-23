import React from 'react';
import {Jumbotron, Button} from 'react-bootstrap';

const Maintron = (props) => {
  return (
    <Jumbotron >
      <h1>Support your community today.</h1>
      <p>
        ENTER SOME WORDS OF ENCOURAGEMENT HERE AND
        NOTE SURE WHERE THE BUTTON SHOULD LEAD TO.
      </p>
      <p>
        <Button onClick={this.props.scrollTo()}bsStyle="primary">Learn more</Button>
      </p>
    </Jumbotron>
  )

}

export default Maintron
