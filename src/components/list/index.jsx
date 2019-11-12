import './styles.scss';
import Message from '../message';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

const propTypes = {
    messages: PropTypes.array,
};
const defaultProps = {
    messages: []
};

function List (props) {
    return (
        <section className="container">
            {
                props.messages.reverse().map((message) => (
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

List.propTypes = propTypes;
List.defaultProps = defaultProps;
const mapStateToProps = (state) => ({
    messages: state.messages,
});
export default connect(
    mapStateToProps,
    null
)(List);

