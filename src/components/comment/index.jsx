import './styles.scss';
import React, { Component } from 'react';
import { LOCALE } from '../../constants/locale.js';
import Svg from '../svg';

const {
    WRITE,
    PUBLISH,
    PRIVATE_MODE,
} = LOCALE.COMMENT;
class Comment extends Component {
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
                                <input
                                    id="privateMode"
                                    onClick={this.handlePrivateMode}
                                    type="checkbox"
                                    value={this.state.isPrivateModeChecked}
                                />
                                <label htmlFor="privateMode">
                                    {PRIVATE_MODE}
                                </label>
                            </div>
                            <div className="post-send">
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

export default Comment;
