import React from 'react';
import ReactDOM from 'react-dom';
import Bg from './component/Bg';
import Overlay from './component/Overlay';
import Header from './component/Header';
import Footer from './component/Footer';

const App = () => {
	return (
		<>
			<Bg />
			<Overlay />
			<Header />
			<Footer />
		</>
	);
};

ReactDOM.render(<App />, document.getElementById('wrapper'));
