import React from "react";
import ReactDOM from "react-dom";
import List from "./components/list.jsx";
import Form from "./components/form.jsx";
import DescriptionCard from "./components/descriptionCard.jsx";
import LoginPage from "./components/login.jsx"
import Signup from "./components/signup.jsx"
import axios from "axios";
// import AnyComponent from './components/filename.jsx'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      featuredItem: {
        title: null,
        description: null,
        id: null
      },
      show: false
    };
    this.retrievePosts = this.retrievePosts.bind(this);
    // this.savePosts = this.savePosts.bind(this);
    this.changeFeatured = this.changeFeatured.bind(this);
    this.handleClaim = this.handleClaim.bind(this);
    this.resetFormView = this.handleClaim.bind(this);
  }
  componentDidMount() {
    this.retrievePosts();
    // this.savePosts();
  }
  changeFeatured(listItem) {
    this.setState({ featuredItem: listItem,
                    show: !this.state.show
     });
  }
  retrievePosts() {
    axios
      .get("/fetch")
      .then(results => {
        this.setState({
          posts: results.data
        })
      })
      .catch(function(error) {
        console.log("There was an error retrieving posts.", error);
      });
  }


  handleClaim(claimedPostID) {
    console.log("claimedPost clicked", claimedPostID);
    axios
      .post("/updateentry", {
        postID: claimedPostID
      })
      .then(done => {
        this.retrievePosts();
        this.setState({
          show:!this.state.show
        })
      });
  }
  render() {
    return (
      <div>
        <h4>Our Fantastical Greenfield Project</h4>
        <ReactBootstrap.Grid className="show-grid">
          <ReactBootstrap.Row>
            <ReactBootstrap.Col md={6}>
              <List
                posts={this.state.posts}
                handleClick={this.changeFeatured}
              />
            </ReactBootstrap.Col>
            <ReactBootstrap.Col className="pass" md={6}>
             {this.state.show === false ? <Form refresh={this.retrievePosts} /> :  <DescriptionCard
                featuredItem = {this.state.featuredItem} claimHandler={this.handleClaim}
            /> }
            </ReactBootstrap.Col>
          </ReactBootstrap.Row>
        </ReactBootstrap.Grid>
      </div>
    );
  }
}
console.log('hello');
ReactDOM.render(<LoginPage />, document.getElementById("app"));