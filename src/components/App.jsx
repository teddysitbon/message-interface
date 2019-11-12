import Comment from './comment';
import Header from './header';
import List from './list';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';


const propTypes = {
    isConnected: PropTypes.bool.isRequired,
};

function App (props) {
    return (
        <>
            <Header />
            {
                props.isConnected &&
                <Comment />
            }
            <List
                isConnected={props.isConnected}
            />
        </>
    );
}

App.propTypes = propTypes;
const mapStateToProps = (state) => ({
    isConnected: state.isConnected,
});
export default connect(
    mapStateToProps,
    null
)(App);
