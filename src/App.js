import React, { Component } from 'react';
import './App.css';
import Carousel from 'react-bootstrap/Carousel';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import Category from './Components/Search/Category';
import Infos from './Components/Infos/Infos';
import Form from './Components/Form/Form';
import Thankyou from "./Components/Form/Thankyou";
import Contact from "./Components/Contact/Contact";

const initialState = {
    category: '',
    route: 'home',
    isSignedIn: true,
    user: {
        id: '',
        name: '',
        email: '',
        joined: ''
    }
}

class App extends Component {
  constructor() {
      super();
      this.state = initialState; //interact parent with children
  }

  loadUser = (data) => {
      this.setState({user: {
          id: data.id,
          name: data.name,
          email: data.email,
          joined: data.joined
      }})
  }

    loadCategory = (cat) => {
        this.setState({
            category: cat
        })
        console.log(cat)
    }


    // onInputChange = (event) => {
    //     this.setState({input: event.target.value}); // When event happens, get the event value
    // }

    // onButtonSubmit = () => {
    //     this.setState({imageUrl: this.state.input});
    //     fetch('http://localhost:3000/imageurl', { //fetch connects frontend with the server
    //         method: 'post',
    //         headers: {'Content-Type': 'application/json'},
    //         body: JSON.stringify({
    //             input: this.state.input
    //         })
    //     })
    //         .then(response => response.json()) //after "fetch", always do ".then( response => response.json())"
    //         .then(response => {
    //             if (response) {
    //                 fetch('http://localhost:3000/image', { //fetch connects frontend with the server
    //                     method: 'put',
    //                     headers: {'Content-Type': 'application/json'},
    //                     body: JSON.stringify({ // Send email and password updated at "onEmailChange" and "onPasswordChange" to the database through JSON.stringify
    //                         id: this.state.user.id
    //                     })
    //                 })
    //                     .then(response => response.json())
    //                     .then(count => {
    //                         this.setState(Object.assign(this.state.user, {entries: count}))
    //                     })
    //                     .catch(console.log)
    //             }
    //             this.displayFaceBox(this.calculateFaceLocation(response)) //.outputs[0].data.regions[0].region_info.bounding_box
    //         })
    //         .catch(err => console.log(err));
    //     // do something with response
    // }





onRouteChange = (route) => {
      this.setState({route: route});
}


  render() {
      const { isSignedIn, route} = this.state;
    return (
      <div className="App">
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
          { route === 'home' || route === 'category'
              ? <div>
                  < Category loadUser={this.loadUser} onRouteChange={this.onRouteChange} loadCategory={this.loadCategory}/>

                </div>
              :(
                          route === 'category'
                          ?< Category loadUser={this.loadUser} onRouteChange={this.onRouteChange} loadCategory={this.loadCategory}/>
                          :(
                              route === 'infos'
                              ?< Infos loadUser={this.loadUser}  onRouteChange={this.onRouteChange} loadCategory={this.loadCategory} category={this.state.category} />
                              :(
                                  route === 'thankyou'
                                  ?< Thankyou onRouteChange={this.onRouteChange} />
                                  :(
                                     < Form loadUser={this.loadUser}  onRouteChange={this.onRouteChange} onInputChange={this.onInputChange} />
                                      )
                                  )
                          )
                  )
          }
          <Contact isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
      </div>
    );
  }
}

export default App;
