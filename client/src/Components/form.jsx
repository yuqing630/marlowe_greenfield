import React from 'react';
import axios from 'axios';


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
    e.preventDefault();
    axios.post('/savepost', this.state)
      .then(function(response) {
        console.log('Post has been saved.', response);
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
    <div className>  
      <form>
        Username:
        <input type="text" placeholder="Username"></input>
         Email:
        <input value={this.state.email} type="text" placeholder="Username" onChange={(e) => {this.handleEmail(e)}}></input>
        Title:
        <input value={this.state.title} type="text" placeholder="Title" onChange={(e) => {this.handleTitle(e)}}required></input>
        Description:
        <input value={this.state.description} type="text" placeholder="Description" onChange={(e) => {this.handleDescription(e)}} required></input>
        Address:
        <input value={this.state.address} type="text" placeholder="Address" onChange={(e) => {this.handleAddress(e)}} required></input>
        City:
        <input value={this.state.city} type="text" placeholder="City" onChange={(e) => {this.handleCity(e)}} required></input>
        State:
        <input value={this.state.state} type="text" placeholder="State" onChange={(e) => {this.handleState(e)}} required></input>
        Zipcode:
        <input value={this.state.zipCode} type="text" placeholder="Zip Code" onChange={(e) => {this.handleZipcode(e)}} required></input>
        <button onClick={this.savePost} >Submit</button>
      </form>
      </div>
    )
  }
}

export default Form; 
