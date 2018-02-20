import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Components/form.jsx'

// import AnyComponent from './components/filename.jsx'

class App extends React.Component {
  constructor(props) {
  	super(props)
  	this.state = {
      posts: [];
  	}
  }

  render () {
  	return (
      <div>
      <h4>Our Fantastical Greenfield Project</h4>
        <Form />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));