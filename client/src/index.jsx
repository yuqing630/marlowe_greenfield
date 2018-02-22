import React from "react";
import ReactDOM from "react-dom";
import NavigationBar from "./components/navbar.jsx"
import Maintron from "./components/jumbotron.jsx"
import List from "./components/list.jsx";
import Form from "./components/form.jsx";
import DescriptionCard from "./components/descriptionCard.jsx";
import LoginPage from "./components/login.jsx"
import Signup from "./components/signup.jsx"
import MapComponent from "./components/googleMaps.jsx"
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
    if(this.state.show === false){
      this.setState({ featuredItem: listItem,
        show: true
      });
    }else if(this.state.show === true){
      if(this.state.featuredItem.id === listItem.id){
        this.setState({
          show:false
        })
        // console.log('this is clicked')
      }else{
        this.setState({ featuredItem: listItem,
          show:true
        })
      }
      // console.log(this.state.featuredItem, 'else if function', listItem)
    }
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
    console.log('this is the state of show', this.state.show)
    return (
      <div>
      <NavigationBar />
      <Maintron />
        <ReactBootstrap.Grid className="show-grid">
          <ReactBootstrap.Row>
            <ReactBootstrap.Col md={6}>
            <h2> Recent Postings </h2>
              <List
                posts={this.state.posts}
                handleClick={this.changeFeatured}
              />
            </ReactBootstrap.Col>
            <ReactBootstrap.Col className="pass" md={6}>
             {this.state.show === false
              ? <Form refresh={this.retrievePosts} />
              :  <DescriptionCard
                    featuredItem = {this.state.featuredItem}
                    claimHandler={this.handleClaim}
                  /> }
            </ReactBootstrap.Col>
          </ReactBootstrap.Row>
        </ReactBootstrap.Grid>
        <div className="map">
        <MapComponent
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }}
        />}
        />
        </div>
      </div>
    );
  }
}
export default App
ReactDOM.render(<LoginPage />, document.getElementById("app"));
