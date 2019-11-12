import './styles.scss';
import Connection from '../connection';
import { LOCALE } from '../../constants/locale.js';
import PropTypes from 'prop-types';
import React from 'react';
import Svg from '../svg';
import { connect } from 'react-redux';

const {
    WELCOME,
    CONNECT,
} = LOCALE.HEADER;
class Header extends React.Component {
    static propTypes = {
        isConnected: PropTypes.bool.isRequired,
        user: PropTypes.object,
    };

    static defaultProps = {
        user: {}
    };

    state = {
        isFormConnectionOpen: false,
    }

    handleCloseForm = () => {
        this.setState({ isFormConnectionOpen: false });
    }

    handleFormConnection = () => {
        this.setState((prevState) => ({ isFormConnectionOpen: !prevState.isFormConnectionOpen }));
    }

    renderConnection () {
        if (this.props.isConnected) {
            return (
                <span className="container-action">
                    {`${WELCOME} ${this.props.user.username}`}
                </span>
            );
        }
        return (
            <span
                className="container-action"
                onClick={this.handleFormConnection}
            >
                {CONNECT}
            </span>
        );
    }

    render () {
        return (
            <>
                <header className="header">
                    <a
                        className="header-link"
                        href="https://www.leboncoin.fr/"
                    >
                        <Svg
                            className="logo"
                            type="logo"
                            viewBox="0 0 230 45"
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

const mapStateToProps = (state) => ({
    isConnected: state.isConnected,
    user: state.user,
});
export default connect(
    mapStateToProps,
    null
)(Header);

