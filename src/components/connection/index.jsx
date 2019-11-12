
import './styles.scss';
import React, { Component } from 'react';
import { LOCALE } from '../../constants/locale.js';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { connectUser } from '../../actions/index.js';
import { users } from '../../constants';

const {
    USERNAME,
    CONNECT,
} = LOCALE.CONNECTION;

class Connection extends Component {
    static propTypes = {
        connectUser: PropTypes.func.isRequired,
        onClose: PropTypes.func.isRequired,
    };

    state = {
        value: ''
    };

    handleChange = (event) => {
        this.setState({ value: event.target.value });
    }

    handleConnectUser = () => {
        const username = this.state.value;
        if (this.isInArrayOfUsers(username)) {
            const user = this.returnUser(username);
            this.props.connectUser(user);
            this.props.onClose();
        }
    }

    isInArrayOfUsers (username) {
        return users.filter((user) => user.username === username).length > 0;
    }

    returnUser (username) {
        return users.filter((user) => user.username === username)[0];
    }

    render () {
        return (
            <>
                <div className="connection">
                    <div className="connection-content">
                        <div className="connection-username">
                            {USERNAME}
                        </div>
                        <input
                            onChange={this.handleChange}
                            type="text"
                            value={this.state.value}
                        />
                    </div>
                    <div className="connection-footer">
                        <div
                            className="connection-link"
                            onClick={this.handleConnectUser}
                        >
                            {CONNECT}
                        </div>
                    </div>
                </div>
                <div
                    className="connection-background"
                    onClick={this.props.onClose}
                />
            </>
        );
    }
}

const mapDispatchToProps = {
    connectUser
};
export default connect(
    null,
    mapDispatchToProps
)(Connection);

