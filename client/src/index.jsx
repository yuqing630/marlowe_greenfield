import React from 'react';
import ReactDOM from 'react-dom';
import List from './components/list.jsx';
import Form from './components/form.jsx';

import axios from 'axios';
// import AnyComponent from './components/filename.jsx'

class App extends React.Component {
  constructor(props) {
  	super(props)
  	this.state = {
      posts: []
  	}

    this.retrievePosts = this.retrievePosts.bind(this);
    this.savePosts = this.savePosts.bind(this);
  }

  componentDidMount() {
    this.retrievePosts();
    this.savePosts();
    console.log('List Items:', this.state.posts);
  }

  retrievePosts() {
    axios.get('/fetch')
    .then((results) => {
      this.savePosts(results.data);
    })
    .catch(function(error) {
      console.log('There was an error retrieving posts.', error);
    })
  }

  savePosts(data) {
    this.setState({
      posts: data
    });
    console.log('this is state.posts: ', this.state.posts);
  }
  //include componentDidMount function

  //axios.get('/fetch') to retrieve posts

  render () {
  	return (
      <div>
      <h4>Our Fantastical Greenfield Project</h4>
        <List posts={this.state.posts}/>
        <Form />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));