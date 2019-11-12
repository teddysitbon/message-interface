import Comment from './comment';
import Header from './header';
import List from './list';
import React from 'react';

function App () {
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
