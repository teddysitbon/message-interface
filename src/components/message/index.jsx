import './styles.scss';
import React, { Component } from 'react';
import { LOCALE } from '../../constants/locale.js';
import PropTypes from 'prop-types';
import Svg from '../svg';

const {
    PRIVATE,
    PUBLIC,
} = LOCALE.MESSAGE;
class Message extends Component {
    static propTypes = {
        isPrivated: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
    };

    renderStatusMessage () {
        if (this.props.isPrivated) {
            return (
                <>
                    <Svg
                        className="message-logo"
                        type="locked"
                        viewBox="0 0 54 54"
                    />
                    <span>
                        {PRIVATE}
                    </span>
                </>
            );
        }
        return (
            <>
                <Svg
                    className="message-logo"
                    type="public"
                    viewBox="0 0 480.1 480.1"
                />
                <span>
                    { PUBLIC }
                </span>
            </>
        );
    }

    render () {
        return (
            <div className="message">
                <div className="message-header">
                    <span className="message-name">
                        { this.props.username }
                    </span>
                </div>
                <div className="message-text">
                    { this.props.text }
                </div>
                <div className="message-footer">
                    { this.renderStatusMessage() }
                </div>
            </div>
        );
    }
}

export default Message;
