import React from 'react';
import Svg from '../svg';
import './styles.scss';

class Comment extends React.Component {
    state = {
        isPrivateModeChecked: false,
        value: ''
    };

    handleChangeComment = (event) => {
        this.setState({ value: event.target.value });
    }

    handlePrivateMode = () => {
        this.setState((prevState) => {
            return { isPrivateModeChecked: !prevState.isPrivateModeChecked };
        });
    }

    render () {
        return (
            <section className={'comment'}>
                <div className={'comment-logo'}>
                    <Svg
                        className='logo'
                        type="pen"
                        viewBox="0 0 504.161 504.161"
                    />
                </div>
                <div className={'post'}>
                    <div className={'post-header'}>
                        {'Écrire un message'}
                    </div>
                    <div className={'post-message'}>
                        <textarea
                            onChange={this.handleChangeComment}
                            value={this.state.value}
                        />
                    </div>
                    <div className={'post-footer'}>
                        <div className={'post-private'}>
                            <input
                                id="privateMode"
                                onClick={this.handlePrivateMode}
                                type="checkbox"
                                value={this.state.isPrivateModeChecked}
                            />
                            <label htmlFor="privateMode">
                                {'Rendre votre commentaire privé'}
                            </label>
                        </div>
                        <div className={'post-send'}>
                            <span>
                                {'Publier'}
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Comment;
