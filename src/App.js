import React from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import HomePage from './component/pages/homepage/homepage.component';
import ShopPage from './component/pages/shop/shop.component';
import SignInAndSignUpPage from './component/pages/signin-signup/signin-sign-up.component';
import Header from './component/header/headerComp';
import {auth} from './component/firebase/firebase.utils'

  class App extends React.Component{
    constructor(props) {
      super(props)
    
      this.state = {
         currentUser:null
      }
    }
    
    
      unsubcribeFromAuth = null

    componentDidMount(){
      this.unsubcribeFromAuth=auth.onAuthStateChanged=(user=>{
        this.setState=({
          currentUser:user
          
        })
        console.log(user);
      })
    }

    componentWillUnmount(){
      this.unsubcribeFromAuth();
    }
      
    


    render(){
      return (
        <div>
          <Header currentUser={this.state.currentUser}/>
         <Switch>
           <Route exact path ='/' component={HomePage}/>
             <Route path ='/shop' component={ShopPage}/>
             <Route path ='/signin' component={SignInAndSignUpPage}/>
         </Switch>
        </div>
      );
    
    }
  
  }
export default App;
