import Connection from '../connection';
import PropTypes from 'prop-types';
import React from 'react';
import Svg from '../svg';
import './styles.scss';

class Header extends React.Component {
    static propTypes = {
        isConnected: PropTypes.bool.isRequired,
        username: PropTypes.string,
    };

    static defaultProps = {
        username: ''
    };

    state = {
        isFormConnectionOpen: false,
    }
    handleCloseForm = () => {
        this.setState({ isFormConnectionOpen: false });
    }

    renderFormConnection = () => {
        this.setState((prevState) => {
            return { isFormConnectionOpen: !prevState.isFormConnectionOpen };
        });
    }

    renderConnection = () => {
        if (this.props.isConnected) {
            return (
                <span className={'container-action'}>
                    {`Bienvenue ${this.props.username}`}
                </span>
            );
        }
        return (
            <span
                className={'container-action'}
                onClick={this.renderFormConnection}
            >
                {'Se connecter'}
            </span>
        );
    }

    render () {
        return (
            <>
                <header className={'header'}>
                    <a 
                        className={'header-link'}
                        href='/'
                    >
                        <Svg
                            className='logo'
                            type="logo"
                            viewBox=""
                        />
                    </a>
                    { this.renderConnection() }
                </header>
                {
                    this.state.isFormConnectionOpen &&
                    <Connection
                        onClose={this.handleCloseForm}
                    />
                }
            </>
        );
    }
}

export default Header;
