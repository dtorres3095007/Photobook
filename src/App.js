import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.scss';
import './icomoon/style.css';
import Header from './compnents/Header';
import SignIn from './compnents/SignIn';
import SignUp from './compnents/SignUp';
import PasswordRecovery from './compnents/PasswordRecovery';
import TimeLine from './compnents/TimeLine';
import Post from './compnents/Post';
import Profile from './compnents/Profile';
import Footer from './compnents/Footer';
import logo from './Images/logo.svg';

class App extends Component {
  render() {
    return (
      <main>
        <Header/>
        <h1><img src={logo} className="App-logo" alt="logo" /></h1>
        <SignIn/>
        <SignUp/>
        <PasswordRecovery/>
        <TimeLine/>
        <Post/>
        <Profile/>
        <Footer/>
      </main>
    );
  }
}

export default App;
