import React from 'react';
import Message from '../message';
import { messages } from '../../constants';
import './styles.scss';

class List extends React.Component {

    state = {
        messages: []
    }
    
    componentWillMount() {
        this.setState({ messages });
    };

    render () {

        return (
            <section className={'container'}>
                {
                    this.state.messages.map(message => (
                        <Message
                            key={message.id}
                            isPrivated={message.isPrivated}
                            username={message.username}
                            text={message.text}
                        />
                    ))
                }
            </section>
        );
    }
}

export default List;
