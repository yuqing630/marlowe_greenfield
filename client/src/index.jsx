import React from 'react';
import ReactDOM from 'react-dom';
import List from './components/list.jsx';
import Form from './components/form.jsx';
import DescriptionCard from './components/descriptionCard.jsx';

import axios from 'axios';
// import AnyComponent from './components/filename.jsx'

class App extends React.Component {
  constructor(props) {
  	super(props)
  	this.state = {
      posts: [],
      featuredItem : {title: "FREE HOTDOGS",
                      description: "Leftover from my carnival",
                      id: null
      }
  	}

    this.retrievePosts = this.retrievePosts.bind(this);
    this.savePosts = this.savePosts.bind(this);
    this.changeFeatured = this.changeFeatured.bind(this);
    this.handleClaim = this.handleClaim.bind(this);
  }

  componentDidMount() {
    this.retrievePosts();
    this.savePosts();
    console.log('List Items:', this.state.posts);
  }

  changeFeatured(listItem) {
    this.setState({featuredItem: listItem});
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
  
  handleClaim(claimedPostID){
    console.log('claimedPost clicked', claimedPostID)
    axios.post('/updateentry', {
      postID: claimedPostID
    }).then((done) =>{
      this.retrievePosts();
    })
  }

  render () {
  	return (
      <div>
      <h4>Our Fantastical Greenfield Project</h4>
        <List posts={this.state.posts} handleClick={this.changeFeatured}/>
        <Form />
        <DescriptionCard title={this.state.featuredItem.title} description={this.state.featuredItem.description} id={this.state.featuredItem.id} claimHanlder={this.handleClaim}/>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('app'));