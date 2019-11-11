import PropTypes from 'prop-types';
import React from 'react';
import Svg from '../svg';
//import classNames from 'classnames';
//import { connect } from 'react-redux';
import './styles.scss';


class Message extends React.Component {
    static propTypes = {
        isPrivated: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
    };

    static defaultProps = {
    };

    renderStatusMessage = () => {
        if (this.props.isPrivated) {
            return (
                <>
                    <Svg
                        className='message-logo'
                        type="locked"
                        viewBox="0 0 54 54"
                    />
                    <span>
                        {'Ce message est privé. Vous le voyez car vous êtes connecté.'}
                    </span>
                </>
            )
        }
        return (
            <>
                <Svg
                    className='message-logo'
                    type="public"
                    viewBox="0 0 480.1 480.1"
                />
                <span>
                    {'Ce message est public. Tout le monde peut le voir.'}
                </span>
            </>
        )
    }

    render () {
        return (
            <div className={'message'}>
                <div className={'message-header'}>
                    <span className={'message-name'}>
                        { this.props.username }
                    </span>
                </div>
                <div className={'message-text'}>
                    { this.props.text }
                </div>
                <div className={'message-footer'}>
                    { this.renderStatusMessage() }
                </div>
            </div>
        );
    }
}

export default Message;
