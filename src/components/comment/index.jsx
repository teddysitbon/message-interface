import './styles.scss';
import React, { Component } from 'react';
import { LOCALE } from '../../constants/locale.js';
import PropTypes from 'prop-types';
import Svg from '../svg';
import { addMessage } from '../../actions/index.js';
import classNames from 'classnames';
import { connect } from 'react-redux';

const {
    WRITE,
    PUBLISH,
    PRIVATE_MODE,
} = LOCALE.COMMENT;
class Comment extends Component {
    static propTypes = {
        addMessage: PropTypes.func.isRequired,
    };

    state = {
        isPrivateModeChecked: false,
        value: ''
    };

    handleChangeComment = (event) => {
        this.setState({ value: event.target.value });
    }

    handlePrivateMode = () => {
        this.setState((prevState) => ({ isPrivateModeChecked: !prevState.isPrivateModeChecked }));
    }

    handleSendMessage = () => {
        const message = {
            id: 234,
            isPrivated: this.state.isPrivateModeChecked,
            text: this.state.value,
            username: 'Teddy',
        };
        this.props.addMessage(message);
        this.resetForm();
    }

    resetForm = () => {
        this.setState({
            isPrivateModeChecked: false,
            value: ''
        });
    }

    render () {
        return (
            <section className="comment">
                <div className="comment-container">
                    <div className="comment-logo">
                        <Svg
                            className="logo"
                            type="pen"
                            viewBox="0 0 504.161 504.161"
                        />
                    </div>
                    <div className="post">
                        <div className="post-header">
                            {WRITE}
                        </div>
                        <div className="post-message">
                            <textarea
                                onChange={this.handleChangeComment}
                                value={this.state.value}
                            />
                        </div>
                        <div className="post-footer">
                            <div className="post-private">
                                <span
                                    className={classNames(
                                        'post-checkbox',
                                        { 'post-checkbox--checked': this.state.isPrivateModeChecked }
                                    )}
                                    onClick={this.handlePrivateMode}
                                />
                                <label>
                                    {PRIVATE_MODE}
                                </label>
                            </div>
                            <div
                                className="post-send"
                                onClick={this.handleSendMessage}
                            >
                                <span>
                                    {PUBLISH}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
const mapDispatchToProps = {
    addMessage
};

export default connect(
    null,
    mapDispatchToProps
)(Comment);

