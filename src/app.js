import React from 'react';
import { hot } from 'react-hot-loader';
import Button from './components/button';

import './styl/app.styl';

const App = () => (
	<div className="app">
		react Starter
		<span role="img" aria-label="rocketship">
			🚀
		</span>
		<Button content="Click This Now!!!" />
	</div>
);

export default hot(module)(App);
