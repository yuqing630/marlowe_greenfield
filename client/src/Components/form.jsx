import React from 'react';
import axios from 'axios';
import {FormControl, FormGroup, ControlLabel, Button} from 'react-bootstrap';


class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      emailAddress: '',
      title: '',
      description: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
      isClaimed: false
    }

    this.savePost = this.savePost.bind(this);
    this.clearFields = this.clearFields.bind(this); 
    this.handleUsername = this.handleUsername.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.handleAddress = this.handleAddress.bind(this);
    this.handleCity = this.handleCity.bind(this);
    this.handleState = this.handleState.bind(this);
    this.handleZipcode = this.handleZipcode.bind(this);

    //title, description, address, city, state, zip_code, is_claimed
  }

  savePost(e) {
    e.preventDefault()
    axios.post('/savepost', this.state)
      .then( (response) =>{
        console.log('Post has been saved.', response);
        this.clearFields();
        this.props.refresh();
      })
      .catch(function(error) {
        console.log('There was an error saving this post.', error);
      })
  }

  clearFields() {
    this.setState({
      username: '',
      emailAddress: '',
      title: '',
      description: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
      isClaimed: false
    });
  }

  handleUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  handleEmail(e) {
    this.setState({
      email: e.target.value
    });
  }
  
  handleTitle(e) {
    this.setState({
      title: e.target.value
    });
  }

  handleDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  handleAddress(e) {
    this.setState({
      address: e.target.value
    });
  }

  handleCity(e) {
    this.setState({
      city: e.target.value
    });
  }

  handleState(e) {
    this.setState({
      state: e.target.value
    });
  }

  handleZipcode(e) {
    this.setState({
      zipCode: e.target.value
    });
  }

   render() {
    return (

      <div className="form">
          <form>
          <div className="formFields">
          <ControlLabel>Working example with validation</ControlLabel>
          <FormControl
            type="text"
            value={this.state.email}
            placeholder="Email"
            onChange={(e) => {this.handleEmail(e)}}
          />
          <FormControl
            type="text"
            value={this.state.title}
            placeholder="Title"
            onChange={(e) => {this.handleTitle(e)}}
          />
          <FormControl
            type="text"
            value={this.state.description}
            placeholder="Description"
            onChange={(e) => {this.handleDescription(e)}}
          />
          <FormControl
            type="text"
            value={this.state.address}
            placeholder="Stree Address"
            onChange={(e) => {this.handleAddress(e)}}
          />
          <FormControl
            type="text"
            value={this.state.city}
            placeholder="City"
            onChange={(e) => {this.handleCity(e)}}
          />
          <FormControl
            type="text"
            value={this.state.state}
            placeholder="State"
            onChange={(e) => {this.handleState(e)}}
          />
          <FormControl
            type="text"
            value={this.state.state}
            placeholder="ZipCode"
            onChange={(e) => {this.handleZipcode(e)}}
          />
          </div>
           <div className="formButton"><Button onClick={this.savePost}>Submit</Button></div>
      </form>
      </div>
    );
  }
}

export default Form; 