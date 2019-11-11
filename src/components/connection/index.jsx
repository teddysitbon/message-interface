
import React from 'react';
import './styles.scss';

class Connection extends React.Component {
    state = {
        value: ''
    };

    handleChange = (event) => {
        this.setState({ value: event.target.value });
    }

    render () {
        return (
            <>
            <div className={'connection'}>	
                <div className={'connection-content'}>
                    <div className={'connection-username'}>
                        {'Username'}
                    </div>
                    <input
                        onChange={this.handleChange}
                        type="text"
                        value={this.state.value}
                    />
                </div>
                <div className={'connection-footer'}>
                    <div className={'connection-link'}>
                        {'Se connecter'}
                    </div>
                </div>
            </div>
            <div
                className={'connection-background'}
                onClick={this.props.onClose}    
            />
            </>
        );
    }
}

export default Connection;
