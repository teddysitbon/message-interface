import React from 'react';
import './styles.scss';
import Comment from './comment';
import Header from './header';
import List from './list';

function App() {
	return (
		<>
			<Header
				isConnected={false}
			/>
			<Comment />
			<List />
		</>
	);
}

export default App;
