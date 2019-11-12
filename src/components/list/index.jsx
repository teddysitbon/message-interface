import './styles.scss';
import React, { Component } from 'react';
import Message from '../message';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const propTypes = {
    isConnected: PropTypes.bool.isRequired,
    messages: PropTypes.array,
};
const defaultProps = {
    messages: []
};
class List extends Component {
    render () {
        const messages = this.props.isConnected ? this.props.messages : this.props.messages.filter((message) => !message.isPrivated);
        return (
            <section className="container">
                {
                    messages.reverse().map((message) => (
                        <Message
                            isPrivated={message.isPrivated}
                            key={message.id}
                            text={message.text}
                            username={message.username}
                        />
                    ))
                }
            </section>
        );
    }
}

List.propTypes = propTypes;
List.defaultProps = defaultProps;
const mapStateToProps = (state) => ({
    messages: state.messages,
});
export default connect(
    mapStateToProps,
    null
)(List);

