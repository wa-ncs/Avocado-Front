import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'mobx-react';
import RootStore from './RootStore';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import NotFound from './pages/NotFound';
import LoginContainer from './pages/User/LoginContainer';
import Header from './pages/Header';
import Footer from './pages/Footer';

const root = new RootStore();

ReactDOM.render(
	<Provider {...root}>
		<Layout>
			<Router>
				<Header />
				<Switch>
					<Route exact path='/' component={App}></Route>
					<Route path='/login' component={LoginContainer}></Route>
					<Route component={NotFound} />
				</Switch>
				<Footer />
			</Router>
		</Layout>
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
