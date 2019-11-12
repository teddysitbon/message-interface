
import './styles.scss';
import React, { Component } from 'react';
import { LOCALE } from '../../constants/locale.js';
import PropTypes from 'prop-types';

const {
    USERNAME,
    CONNECT,
} = LOCALE.CONNECTION;

class Connection extends Component {
    static propTypes = {
        onClose: PropTypes.func.isRequired,
    };

    state = {
        value: ''
    };

    handleChange = (event) => {
        this.setState({ value: event.target.value });
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
                        <div className="connection-link">
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

export default Connection;
