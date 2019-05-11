import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import TopMenu from './components/elements/TopMenu.jsx';
import Main from './components/pages/Main';
import News from './components/pages/News';
import Profile from './components/pages/Profile';
import Login from './components/pages/Login';
import Notfound from './components/pages/Notfound';

class App extends Component {
	render() {
		return (
			<div className="App">
				<TopMenu />
				<Route exact path="/" component={Main} />
				<Route path="/news" component={News} />
				<Route path="/profile" component={Profile} />
				<Route path="/login" component={Login} />
				<Route component={Notfound} />
			</div>
		);
	}
}

export default App;
